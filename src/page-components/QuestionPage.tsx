import { IQuestion, QuestionType } from "../models/question";
import FileDropDownPage from "@/components/question-types/fileDropDown";
import SingleSelectPage from "@/components/question-types/singleSelect";
import { StateType } from "@/components/reducer";
import { Dispatch } from "react";

export default function QuestionPage(props: {
  state: StateType;
  dispatch: Dispatch<any>;
}) {
  return (props.state.currentItem as IQuestion).questionType ==
    QuestionType.FileDropDown ? (
    <FileDropDownPage state={props.state} dispatch={props.dispatch} />
  ) : (props.state.currentItem as IQuestion).questionType ==
    QuestionType.SingleSelect ? (
    <SingleSelectPage state={props.state} dispatch={props.dispatch} />
  ) : (
    <></>
  );
}
