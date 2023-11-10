import { HistoryType } from "../../components/history";
// import * as functions from "./returnFunctions";
const deciderMap: { [tot: string]: { [key: string]: number } } = {
  "2": {
    "[1, 1]": 0,
    "[2]": 0,
  },
  "3": { "[1, 1, 1]": 0, "[1, 2]": 0, "[3]": 1 },
  "4": {
    "[1, 1, 1, 1]": 0,
    "[1, 1, 2]": 0,
    "[1, 3]": 1,
    "[2, 2]": 0,
    "[4]": 1,
  },
  "5": {
    "[1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 2]": 0,
    "[1, 1, 3]": 1,
    "[1, 2, 2]": 0,
    "[1, 4]": 1,
    "[2, 3]": 0,
    "[5]": 1,
  },
  "6": {
    "[1, 1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 1, 2]": 0,
    "[1, 1, 1, 3]": 1,
    "[1, 1, 2, 2]": 0,
    "[1, 1, 4]": 1,
    "[1, 2, 3]": 0,
    "[1, 5]": 1,
    "[2, 2, 2]": 0,
    "[2, 4]": 1,
    "[3, 3]": 0,
    "[6]": 1,
  },
  "7": {
    "[1, 1, 1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 1, 1, 2]": 0,
    "[1, 1, 1, 1, 3]": 0,
    "[1, 1, 1, 2, 2]": 0,
    "[1, 1, 1, 4]": 1,
    "[1, 1, 2, 3]": 0,
    "[1, 1, 5]": 1,
    "[1, 2, 2, 2]": 0,
    "[1, 2, 4]": 1,
    "[1, 3, 3]": 0,
    "[1, 6]": 1,
    "[2, 2, 3]": 0,
    "[2, 5]": 1,
    "[3, 4]": 0,
    "[7]": 1,
  },
  "8": {
    "[1, 1, 1, 1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 1, 1, 1, 2]": 0,
    "[1, 1, 1, 1, 1, 3]": 0,
    "[1, 1, 1, 1, 2, 2]": 0,
    "[1, 1, 1, 1, 4]": 1,
    "[1, 1, 1, 2, 3]": 0,
    "[1, 1, 1, 5]": 1,
    "[1, 1, 2, 2, 2]": 0,
    "[1, 1, 2, 4]": 1,
    "[1, 1, 3, 3]": 0,
    "[1, 1, 6]": 1,
    "[1, 2, 2, 3]": 0,
    "[1, 2, 5]": 1,
    "[1, 3, 4]": 0,
    "[1, 7]": 1,
    "[2, 2, 2, 2]": 0,
    "[2, 2, 4]": 1,
    "[2, 3, 3]": 0,
    "[2, 6]": 1,
    "[3, 5]": 1,
    "[4, 4]": 0,
    "[8]": 1,
  },
  "9": {
    "[1, 1, 1, 1, 1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 2]": 0,
    "[1, 1, 1, 1, 1, 1, 3]": 0,
    "[1, 1, 1, 1, 1, 2, 2]": 0,
    "[1, 1, 1, 1, 1, 4]": 0,
    "[1, 1, 1, 1, 2, 3]": 0,
    "[1, 1, 1, 1, 5]": 1,
    "[1, 1, 1, 2, 2, 2]": 0,
    "[1, 1, 1, 2, 4]": 1,
    "[1, 1, 1, 3, 3]": 0,
    "[1, 1, 1, 6]": 1,
    "[1, 1, 2, 2, 3]": 0,
    "[1, 1, 2, 5]": 1,
    "[1, 1, 3, 4]": 0,
    "[1, 1, 7]": 1,
    "[1, 2, 2, 2, 2]": 0,
    "[1, 2, 2, 4]": 1,
    "[1, 2, 3, 3]": 0,
    "[1, 2, 6]": 1,
    "[1, 3, 5]": 0,
    "[1, 4, 4]": 0,
    "[1, 8]": 1,
    "[2, 2, 2, 3]": 0,
    "[2, 2, 5]": 1,
    "[2, 3, 4]": 0,
    "[2, 7]": 1,
    "[3, 3, 3]": 0,
    "[3, 6]": 1,
    "[4, 5]": 0,
    "[9]": 1,
  },
  "10": {
    "[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 1, 2]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 3]": 0,
    "[1, 1, 1, 1, 1, 1, 2, 2]": 0,
    "[1, 1, 1, 1, 1, 1, 4]": 0,
    "[1, 1, 1, 1, 1, 2, 3]": 0,
    "[1, 1, 1, 1, 1, 5]": 1,
    "[1, 1, 1, 1, 2, 2, 2]": 0,
    "[1, 1, 1, 1, 2, 4]": 1,
    "[1, 1, 1, 1, 3, 3]": 0,
    "[1, 1, 1, 1, 6]": 1,
    "[1, 1, 1, 2, 2, 3]": 0,
    "[1, 1, 1, 2, 5]": 1,
    "[1, 1, 1, 3, 4]": 0,
    "[1, 1, 1, 7]": 1,
    "[1, 1, 2, 2, 2, 2]": 0,
    "[1, 1, 2, 2, 4]": 1,
    "[1, 1, 2, 3, 3]": 0,
    "[1, 1, 2, 6]": 1,
    "[1, 1, 3, 5]": 1,
    "[1, 1, 4, 4]": 0,
    "[1, 1, 8]": 1,
    "[1, 2, 2, 2, 3]": 0,
    "[1, 2, 2, 5]": 1,
    "[1, 2, 3, 4]": 0,
    "[1, 2, 7]": 1,
    "[1, 3, 3, 3]": 0,
    "[1, 3, 6]": 1,
    "[1, 4, 5]": 0,
    "[1, 9]": 1,
    "[2, 2, 2, 2, 2]": 0,
    "[2, 2, 2, 4]": 1,
    "[2, 2, 3, 3]": 0,
    "[2, 2, 6]": 1,
    "[2, 3, 5]": 1,
    "[2, 4, 4]": 0,
    "[2, 8]": 1,
    "[3, 3, 4]": 0,
    "[3, 7]": 1,
    "[4, 6]": 1,
    "[5, 5]": 0,
    "[10]": 1,
  },
  "11": {
    "[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 1, 1, 2]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 1, 3]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 2, 2]": 0,
    "[1, 1, 1, 1, 1, 1, 1, 4]": 0,
    "[1, 1, 1, 1, 1, 1, 2, 3]": 0,
    "[1, 1, 1, 1, 1, 1, 5]": 0,
    "[1, 1, 1, 1, 1, 2, 2, 2]": 0,
    "[1, 1, 1, 1, 1, 2, 4]": 0,
    "[1, 1, 1, 1, 1, 3, 3]": 0,
    "[1, 1, 1, 1, 1, 6]": 1,
    "[1, 1, 1, 1, 2, 2, 3]": 0,
    "[1, 1, 1, 1, 2, 5]": 1,
    "[1, 1, 1, 1, 3, 4]": 0,
    "[1, 1, 1, 1, 7]": 1,
    "[1, 1, 1, 2, 2, 2, 2]": 0,
    "[1, 1, 1, 2, 2, 4]": 1,
    "[1, 1, 1, 2, 3, 3]": 0,
    "[1, 1, 1, 2, 6]": 1,
    "[1, 1, 1, 3, 5]": 1,
    "[1, 1, 1, 4, 4]": 0,
    "[1, 1, 1, 8]": 1,
    "[1, 1, 2, 2, 2, 3]": 0,
    "[1, 1, 2, 2, 5]": 1,
    "[1, 1, 2, 3, 4]": 0,
    "[1, 1, 2, 7]": 1,
    "[1, 1, 3, 3, 3]": 0,
    "[1, 1, 3, 6]": 1,
    "[1, 1, 4, 5]": 0,
    "[1, 1, 9]": 1,
    "[1, 2, 2, 2, 2, 2]": 0,
    "[1, 2, 2, 2, 4]": 1,
    "[1, 2, 2, 3, 3]": 0,
    "[1, 2, 2, 6]": 1,
    "[1, 2, 3, 5]": 1,
    "[1, 2, 4, 4]": 0,
    "[1, 2, 8]": 1,
    "[1, 3, 3, 4]": 0,
    "[1, 3, 7]": 1,
    "[1, 4, 6]": 1,
    "[1, 5, 5]": 0,
    "[1, 10]": 1,
    "[2, 2, 2, 2, 3]": 0,
    "[2, 2, 2, 5]": 1,
    "[2, 2, 3, 4]": 0,
    "[2, 2, 7]": 1,
    "[2, 3, 3, 3]": 0,
    "[2, 3, 6]": 1,
    "[2, 4, 5]": 0,
    "[2, 9]": 1,
    "[3, 3, 5]": 1,
    "[3, 4, 4]": 0,
    "[3, 8]": 1,
    "[4, 7]": 1,
    "[5, 6] ": 0,
    "[11]": 1,
  },
};
function groupDecider(filtered: { [key: string]: number }) {
  let total = Object.values(filtered).reduce(
    (total: number, num: number) => total + num,
    0
  );
  console.log("total", total);
  const sortedArray = Object.values(filtered).sort(function (a, b) {
    return a - b;
  });
  const key = `[${sortedArray.toString().replaceAll(",", ", ")}]`;
  return {
    result: deciderMap[total][key],
    texts: Object.keys(filtered).filter(
      (e) => filtered[e] == sortedArray[sortedArray.length - 1]
    ),
  };
}
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
): any {
  const result = eval(`${functionName}`)(messages, args);
  return result;
}

function group(messages: HistoryType[], args: any): any {
  const filteredAnswers: { [key: string]: number } = {};

  messages
    .slice(messages.length - args.step, messages.length)
    .map((message) => {
      message.s.map((answer) => {
        if (answer != "unknown") {
          if (answer in filteredAnswers) {
            filteredAnswers[answer] += 1;
          } else {
            filteredAnswers[answer] = 1;
          }
        }
      });
    });
  if (args.mostRelatedAnswer && args.mostRelatedAnswer != "unknown") {
    if (args.mostRelatedAnswer in filteredAnswers) {
      filteredAnswers[args.mostRelatedAnswer] += 1;
    } else {
      filteredAnswers[args.mostRelatedAnswer] = 1;
    }
  }
  let decide = groupDecider(filteredAnswers);
  return {
    answers: [
      {
        title: args.titles[0] as string,
        texts: decide.result == 1 ? decide.texts : ["Belirlenemedi"],
      },
    ],
    notes: args.notes,
  };
}

function firstItem(messages: HistoryType[], args: any): any {
  return {
    answers: [{ title: args.titles[0], texts: messages[0].s }],
    notes: args.notes,
  };
}

function firstandlast(messages: HistoryType[], args: any): any {
  return {
    answers: [
      { title: args.titles[0], texts: messages[0].s },
      {
        title: args.titles[1],
        texts: messages[messages.length - 1].s,
      },
    ],
    notes: args.notes,
  };
}

function arg(messages: HistoryType[], args: any): any {
  return {
    answers: args.answers.map((answer: { title: string; texts: string[] }) => ({
      title: answer.title,
      texts: answer.texts,
    })),
    notes: args.notes,
  };
}

function related(messages: HistoryType[], args: any): any {
  const mostRelatedAnswer = messages.filter(
    (e) => e.q == args.mostRelatedQuestion
  )[0].s[0];

  console.log("mostRelatedAnswer", mostRelatedAnswer);
  const most = group(messages, {
    titles: [args.titles[1]],
    step: args.step,
    mostRelatedAnswer: mostRelatedAnswer,
  });

  return {
    answers: [
      {
        title: args.titles[0],
        texts:
          mostRelatedAnswer == "unknown" ? ["Bulunamadı"] : [mostRelatedAnswer],
      },
      { title: most.answers[0].title, texts: most.answers[0].texts },
    ],
    notes: args.notes,
  };
}
