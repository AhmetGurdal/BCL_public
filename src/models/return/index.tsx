import { HistoryType } from "../../components/history";
import { group1 } from "./returnFunctions";

export default class Return {
  functionName: string;
  nextItemID: number;
  constructor(props: any) {
    this.functionName = props.functionName;
    this.nextItemID = props.nextItemID;
  }
}

export function setReturnValue(
  functionName: string,
  messages: HistoryType[],
  args: any
): string[] {
  // console.log("MESSAGES", messages);
  // console.log("ARGS", args);
  if (functionName == "group0") {
    return messages[messages.length - 1]?.s;
  } else if (functionName == "group1") {
    return group1(messages, args)!;
  } else {
    return [];
  }
}
