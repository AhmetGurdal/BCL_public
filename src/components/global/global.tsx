import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SelectionHistory, useSelectionHistory } from "../history";
import { Item } from "@/models/item";
import { IQuestion } from "@/models/question";

export enum GlobalStates {
  QUESTION = "QUESTION",
  ANSWER = "ANSWER",
  LOADING = "LOADING",
  UNKNOWN = "UNKNOWN",
  SETGLOBALVALUE = "SETGLOBALVALUE",
  DISCLAIMER = "DISCLAIMER"
}

type GlobalStatePropType = {
  historyLoading: boolean;
  globalAnswer: string[] | null;
  globalNI: number;
  globalSV: string[];
  currentQuestionID: number;
  currentItemID: number;
  currentItem: Item | null;
  currentState: GlobalStates;
};

const useGlobalState = (items: Item[]) => {
  const history = useSelectionHistory();

  const [states, setStates] = useState<GlobalStatePropType>({
    historyLoading: false,
    globalAnswer: null,
    globalNI: -1,
    globalSV: [],
    currentQuestionID: 1,
    currentItemID: 0,
    currentItem: items[0],
    currentState: GlobalStates.QUESTION,
  });

  useEffect(() => {
    setStates({
      historyLoading: false,
      globalAnswer: null,
      globalNI: -1,
      globalSV: [],
      currentQuestionID: 1,
      currentItemID: 0,
      currentItem: items[0],
      currentState: GlobalStates.QUESTION,
    });
  }, []);

  useEffect(() => {
    if (states.currentItem?.type === "Question") {
      setStates({ ...states, currentState: GlobalStates.QUESTION });
    } else if (states.currentItem?.type === "Answer") {
      setStates({ ...states, currentState: GlobalStates.ANSWER });
    }
  }, [states.currentItemID]);

  const setGlobalAnswer = (
    globalValues: string[],
    ni: number,
    sv: string[]
  ) => {
    setStates({
      ...states,
      globalAnswer: globalValues,
      globalNI: ni,
      globalSV: sv,
      currentState: GlobalStates.SETGLOBALVALUE,
    });
  };

  const toNextItem = (nextItemID: number, selected: string[]) => {
    setStates({ ...states, currentState: GlobalStates.LOADING });
    switch (items[nextItemID].type) {
      case "Question":
        if (selected.length > 0) {
          history.addHistory(
            (states.currentItem as IQuestion).question,
            selected,
            states.currentQuestionID
          );
        }
        setStates({
          ...states,
          currentItemID: nextItemID,
          currentItem: items[nextItemID],
          currentQuestionID: states.currentQuestionID + 1,
        });
        break;
      case "Answer":
        setStates({
          ...states,
          currentItemID: nextItemID,
          currentItem: items[nextItemID],
        });
        break;
      default:
        setStates({ ...states, currentState: GlobalStates.UNKNOWN });
    }
  };

  return {
    states: states,
    history: history,
    toNextItem,
    setStates,
    setGlobalAnswer,
  };
};

export type GlobalStateType = {
  states: GlobalStatePropType;
  history: SelectionHistory;
  toNextItem: (nextItemID: number, selected: string[]) => void;
  setStates: Dispatch<SetStateAction<GlobalStatePropType>>;
  setGlobalAnswer: (globalValues: string[], ni: number, sv: string[]) => void;
};

export default useGlobalState;
