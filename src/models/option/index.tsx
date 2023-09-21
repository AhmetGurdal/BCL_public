import { FunctionProps } from "../question";

interface IOption {
  readonly text: string;
  readonly nextItemID?: number;
}

export class Option implements IOption {
  text: string;
  nextItemID?: number | undefined;
  constructor(props: any) {
    this.text = props?.text;
    this.nextItemID = props?.answerId;
  }
}

interface IFileOption {
  readonly filename: string;
  readonly valueCol: string;
  readonly labelCol: string;
  readonly isFinish: boolean;
  readonly nextItemID?: number;
  readonly answerId?: number;
}

export class FileOption implements IFileOption {
  filename: string;
  valueCol: string;
  labelCol: string;
  isFinish: boolean;
  nextItemID?: number | undefined;
  answerId?: number | undefined;
  function?: FunctionProps | undefined;
  constructor(props: any) {
    this.filename = props?.filename;
    this.valueCol = props?.valueCol;
    this.labelCol = props?.labelCol;
    this.isFinish = props?.isFinish;
    this.nextItemID = props?.nextItemID;
    this.answerId = props?.answerId;
    this.function = props?.function as FunctionProps;
  }
}
