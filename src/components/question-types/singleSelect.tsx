import Selection from "../selection";
import { IQuestion } from "@/models/question";
import { ACTION_TYPES, StateType } from "../reducer";
import { Dispatch } from "react";
import { useTranslation } from "react-i18next";
import { setReturnValue } from "@/models/return";
import { HistoryType } from "../history";
export default function SingleSelectPage(props: {
  state: StateType;
  dispatch: Dispatch<any>;
}) {
  // const [options, setOptions] = useState<{ value: string; label: string }[]>(
  //   []
  // );
  const { t } = useTranslation();

  return (
    <>
      <div className="question">
        {`S${props.state.currentQuestionID} - ` +
          t(`question.${(props.state.currentItem as IQuestion).question}`)}
      </div>
      <div className="selections">
        {(props.state.currentItem as IQuestion).options?.map((e, i) => (
          <Selection
            key={i}
            onClick={() => {
              var newHistory: HistoryType = {
                id: props.state.currentQuestionID,
                q: (props.state.currentItem as IQuestion).question,
                s: [e.text],
              };
              var _args = e?.function?.args ? e?.function?.args : {};
              let _answers: object = {};
              if (e?.function?.name) {
                _answers = setReturnValue(
                  e?.function?.name,
                  [...props.state.history, newHistory],
                  _args
                );
              }
              props.dispatch({
                type: ACTION_TYPES.SELECT,
                payload: {
                  answers: _answers,
                  ni: e.nextItemID!,
                  sv: [e.text],
                },
              });
              // props.globalState.toNextItem(e.nextItemID!, [e.text]);
            }}
            option={e}
          />
        ))}
      </div>
    </>
  );
}
