import { HistoryType } from "../../components/history";
// import * as functions from "./returnFunctions";

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
): object {
  const result = eval(`${functionName}`)(messages, args);
  return result;
}

function group(messages: HistoryType[], args: any): object {
  var values: { [value: string]: number } = {};
  var _step = args.step ? Number(args.step) : 1;
  for (var i = 0; i < _step; i++) {
    messages[messages.length - i - 1].s.map((e) => {
      if (e !== "Belirsiz") {
        if (Object.keys(values).includes(e)) {
          values[e] += 1;
        } else {
          values[e] = 1;
        }
      }
    });
  }

  // Create items array
  var items = Object.keys(values).map(function (key) {
    return [key, values[key]];
  });

  // console.log("ITEMS", items);

  // Sort the array based on the second element
  items.sort(function (first, second) {
    return Number(second[1]) - Number(first[1]);
  });

  let result = items.map((e) => {
    return e[0] as string;
  });

  return {
    answers: result.filter((element) => {
      return element !== null && element !== "unknown";
    }),
  };
}

function firstItem(messages: HistoryType[], args: any): object {
  return { answers: messages[0].s };
}

function firstandlast(messages: HistoryType[], args: any): object {
  return { answers: messages[0].s.concat(messages[messages.length - 1].s) };
}

function arg(messages: HistoryType[], args: any): object {
  return { answers: [args?.value] };
}

function relatedlaw(messages: HistoryType[], args: any): object {
  return { answers: messages[0].s.concat(messages[messages.length - 1].s) };
}
