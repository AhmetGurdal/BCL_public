import { IItem, ItemTypes } from "../item";
import { Option, FileOption } from "../option";

export enum QuestionType {
  FileDropDown = "FileDropDown",
  SingleSelect = "SingleSelect",
  TrueFalse = "TrueFalse",
}

class UnknownProps {
  value: string = "";
  text: string = "";
  nextItemID?: number;
  function?: FunctionProps | undefined;
}

export class FunctionProps {
  name: string = "";
  args: any = {};
}

class MultipleSelectionProps {
  limit: number = -1;
}
class Props {
  unknown?: UnknownProps | undefined;
  multipleSelection: MultipleSelectionProps | undefined;
}
export interface IQuestion extends IItem {
  readonly questionType: QuestionType;
  readonly question: string;
  readonly options?: Option[] | null;
  readonly fileOption?: FileOption | null;
  readonly props?: Props | null;
}

export class TrueFalseQuestion implements IQuestion {
  type: ItemTypes = ItemTypes.Question;
  questionType: QuestionType = QuestionType.TrueFalse;
  question: string;
  options: Option[] | null;

  constructor(props: any) {
    this.question = props.question;
    this.options = props.options;
  }
}
export class SingleSelectionQuestion implements IQuestion {
  type: ItemTypes = ItemTypes.Question;
  questionType: QuestionType = QuestionType.SingleSelect;
  options: Option[] | null = null;
  question: string;
  constructor(props: any) {
    this.question = props.question;
    this.options = props.options;
  }
}

export class FileDropDownQuestion implements IQuestion {
  type: ItemTypes = ItemTypes.Question;
  questionType: QuestionType = QuestionType.FileDropDown;
  question: string;
  fileOption: FileOption;

  constructor(props: any) {
    this.question = props.question;
    this.fileOption = props.fileOption;
  }
}
