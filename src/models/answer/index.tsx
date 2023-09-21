import { IItem, ItemTypes } from "../item";

export enum AnswerType {
  function = "function",
  static = "static",
  global = "global",
}
interface IAnswer extends IItem {
  text: string;
  answerType: AnswerType;
  function?: { name: string; params: object };
}

export class Answer implements IAnswer {
  text: string;
  type: ItemTypes = ItemTypes.Answer;
  answerType: AnswerType;
  function?: { name: string; params: object };
  constructor(props: any) {
    this.text = props.text;
    this.answerType = props.answerType;
    this.function = props?.function;
  }
}
