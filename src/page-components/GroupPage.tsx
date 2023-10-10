"use client";
import "../i18n";
import AnswerPage from "./AnswerPage";
import { Loader } from "@/components/loader";
import { GlobalStates } from "@/components/global/global";
import { useEffect, useReducer } from "react";
import {
  ACTION_TYPES,
  globalReducer,
  INITIAL_STATE,
  StateType,
} from "@/components/reducer";
import { QuestionType } from "@/models/question";
import FileDropDownPage from "@/components/question-types/fileDropDown";
import SingleSelectPage from "@/components/question-types/singleSelect";

export default function GroupPage() {
  // const globalState = useGlobalState(items as Item[]);
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.LOADED });
  }, []);

  useEffect(() => {
    console.log("State => ", state);
  }, [state]);

  switch (state?.state) {
    case GlobalStates.QUESTION:
      return (
        <div>
          {state.currentItemID != 0 && (
            <div
              className="backBtn"
              onClick={() => {
                dispatch({ type: ACTION_TYPES.BACK });
              }}
            >
              <div className="backBtnSymbol">{"<"}</div>
            </div>
          )}
          {state?.currentItem?.questionType == QuestionType.FileDropDown ? (
            <FileDropDownPage state={state} dispatch={dispatch} />
          ) : state?.currentItem?.questionType == QuestionType.SingleSelect ? (
            <SingleSelectPage state={state} dispatch={dispatch} />
          ) : (
            <></>
          )}
        </div>
      );
    // switch (state?.currentItem?.questionType) {
    //   case QuestionType.FileDropDown:
    //     return <FileDropDownPage state={state} dispatch={dispatch} />;
    //   case QuestionType.SingleSelect:
    //     return <SingleSelectPage state={state} dispatch={dispatch} />;
    //   default:
    //     return <>Unknown Question</>;
    // }
    case GlobalStates.ANSWER:
      return <AnswerPage state={state as StateType} />;

    case GlobalStates.LOADING:
      return <Loader />;
    default:
      return <>UNKNOWN ITEM</>;
  }
  // return state.loading ? (
  //   <Loader />
  // ) : state.state == GlobalStates.QUESTION ? (
  //   state.currentItem.questionType == QuestionType.FileDropDown ? (
  //     <FileDropDownPage state={state} dispatch={dispatch} />
  //   ) : state.currentItem.questionType == QuestionType.SingleSelect ? (
  //     <SingleSelectPage state={state} dispatch={dispatch} />
  //   ) : (
  //     <>Unknown Question</>
  //   )
  // ) : state.state == GlobalStates.ANSWER ? (
  //   <AnswerPage state={state as StateType} />
  // ) : (
  //   <>UNKNOWN ITEM</>
  // );
}
