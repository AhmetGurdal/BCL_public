import { HistoryType } from "../../components/history";

export function group1(messages: HistoryType[], args: any): string[] | null {
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

  return result.filter((element) => {
    return element !== null && element !== "unknown";
  });
}
