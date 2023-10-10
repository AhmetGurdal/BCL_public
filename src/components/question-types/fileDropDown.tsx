import { IQuestion } from "@/models/question";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Select from "react-select";
import Selection from "../selection";
import { Option } from "@/models/option";
import { Loader } from "../loader";
import { setReturnValue } from "@/models/return";
import { HistoryType } from "../history";
import { ACTION_TYPES, StateType } from "../reducer";
import { useTranslation } from "react-i18next";

// import { setReturnValue } from "@/models/return";
export default function FileDropDownPage(props: {
  state: StateType;
  dispatch: Dispatch<any>;
}) {
  const { t } = useTranslation();
  const question = props.state.currentItem as IQuestion;
  // console.log("Question", question);
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  const [selectedValues, setSelectedValues] = useState<any[]>([]);

  const loadFile = () => {
    return new Promise((resolve) => {
      import(`../../../dummy/${question.fileOption?.filename}`).then((file) => {
        resolve(file);
      });
    });
  };

  useEffect(() => {
    setSelectedValues([]);
    setLoading(true);
    setOptions([]);
    loadFile()
      .then((file: any) => {
        setOptions(
          file.default.map((e: any) => {
            return {
              value: e[`${question.fileOption?.valueCol}`],
              label: e[`${question.fileOption?.labelCol}`],
            };
          })
        );
      })
      .finally(() => {
        setSelectedValues([null]);
        setLoading(false);
      });
  }, [props.state.currentItem]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className="question">
        {`S${props.state.currentQuestionID} - ` +
          t(`question.${question.question}`)}
      </div>
      <div className="col">
        {options.length > 0 && selectedValues.length > 0 ? (
          <SelectOptions
            options={options}
            question={question}
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
          />
        ) : (
          <Loader />
        )}
        <div className="selections">
          <Selection
            className="accept"
            option={
              new Option({
                text: "confirm",
              })
            }
            disabled={selectedValues[0] == null}
            onClick={() => {
              setLoading(true);
              let _answers: object = {};
              if (question.fileOption?.function?.name) {
                var newHistory: HistoryType = {
                  id: props.state.currentQuestionID,
                  q: question.question,
                  s: selectedValues,
                };
                var _args = question.fileOption.function.args
                  ? question.fileOption.function.args
                  : {};
                _answers = setReturnValue(
                  question.fileOption?.function?.name,
                  [...props.state.history, newHistory],
                  _args
                );
              }
              props.dispatch({
                type: ACTION_TYPES.SELECT,
                payload: {
                  answers: _answers,
                  ni: question.fileOption?.nextItemID!,
                  sv: selectedValues,
                },
              });
              setSelectedValues([]);
              setLoading(false);
            }}
          />
          {!!question.props?.unknown && (
            <Selection
              className="reject"
              option={
                new Option({
                  text: question.props?.unknown.text,
                })
              }
              onClick={() => {
                setLoading(true);
                let _answers: object = {};
                if (question.props?.unknown?.function?.name) {
                  var newHistory: HistoryType = {
                    id: props.state.currentQuestionID,
                    q: question.question,
                    s: [question.props.unknown.value],
                  };
                  var _args = question.props.unknown.function.args
                    ? question.props.unknown.function.args
                    : {};
                  _answers = setReturnValue(
                    question.props?.unknown?.function.name,
                    [...props.state.history, newHistory],
                    _args
                  );
                }
                console.log("ANSWER", _answers);
                props.dispatch({
                  type: ACTION_TYPES.SELECT,
                  payload: {
                    answers: _answers,
                    ni: question.props?.unknown?.nextItemID!,
                    sv: [question.props?.unknown?.value!],
                  },
                });
                setSelectedValues([]);
                setLoading(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const SelectOptions = (props: {
  options: { value: string; label: string }[];
  selectedValues: any[];
  setSelectedValues: Dispatch<SetStateAction<any[]>>;
  question: IQuestion;
}) => {
  // useEffect(() => {
  //   console.log("LOADED");
  // }, []);

  if (props.question.props?.multipleSelection) {
    return (
      <div>
        {props.selectedValues.map((_, i) => {
          return (
            <div key={"g-" + i} className="row">
              <div className="title">
                {i + 1} {" - "}
              </div>

              <Select
                className="dropdown"
                placeholder={"Seçiniz..."}
                options={props.options}
                // value={props.selectedValues[i]}
                onChange={(e) => {
                  const newData = props.selectedValues.slice(0);
                  newData[i] = e?.value;
                  // console.log(newData);
                  props.setSelectedValues(newData);
                  // console.log(selectiions)
                }}
              />
            </div>
          );
        })}
        <div className="row">
          {props.question.props.multipleSelection.limit >
            props.selectedValues.length && (
            <button
              className="actionBtn"
              onClick={() => {
                props.setSelectedValues([...props.selectedValues, null]);
              }}
            >
              +
            </button>
          )}
          {props.selectedValues.length > 1 && (
            <button
              className="actionBtn"
              onClick={() => {
                const newData = props.selectedValues.slice(0);
                newData.pop();
                props.setSelectedValues(newData);
              }}
            >
              -
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <Select
        className="dropdown"
        placeholder={"Seçiniz..."}
        // value={props.selectedValues[0]}
        options={props.options}
        onChange={(e) => {
          props.setSelectedValues([e?.value!]);
        }}
      />
    );
  }
};
