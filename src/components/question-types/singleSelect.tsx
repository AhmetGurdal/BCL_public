import Selection from "../selection";
import { IQuestion } from "@/models/question";
import { ACTION_TYPES, StateType } from "../reducer";
import { Dispatch } from "react";
export default function SingleSelectPage(props: {
  state: StateType;
  dispatch: Dispatch<any>;
}) {
  // const [options, setOptions] = useState<{ value: string; label: string }[]>(
  //   []
  // );

  return (
    <>
      <div className="question">
        {`S${props.state.currentQuestionID} - ` +
          (props.state.currentItem as IQuestion).question}
      </div>
      <div className="selections">
        {(props.state.currentItem as IQuestion).options?.map((e, i) => (
          <Selection
            key={i}
            onClick={() => {
              props.dispatch({
                type: ACTION_TYPES.SELECT,
                payload: {
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
