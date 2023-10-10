import { GlobalStates } from "../global/global";
import items from "../../../dummy/items2.json";
import { Item, ItemTypes } from "@/models/item";
import { IQuestion } from "@/models/question";

export type StateType = {
  answers: object;
  currentQuestionID: number;
  currentItemID: number;
  currentItem: Item;
  history: { q: string; s: string[]; id: number }[];
  loading: boolean;
  state: GlobalStates;
};

export const INITIAL_STATE: StateType = {
  answers: {},
  currentQuestionID: 1,
  currentItemID: 0,
  currentItem: items[0] as Item,
  history: [],
  loading: true,
  state: GlobalStates.QUESTION,
};

export const ACTION_TYPES = {
  SELECT: "SELECT",
  RESET: "RESET",
  BACK: "BACK",
  LOADING: "LOADING",
  LOADED: "LOADED",
};

export const globalReducer = (state: any, action: any) => {
  console.log("TYPE => ", action.type);
  console.log("PAYLOAD => ", action?.payload);
  switch (action.type) {
    case ACTION_TYPES.SELECT:
      let payload = action.payload;
      console.log("NEXTITEM => ", items[payload.ni]);
      if (items[payload.ni]?.type == ItemTypes.Question) {
        let newState: StateType = {
          ...state,
          currentItem: items[payload.ni] as Item,
          currentItemID: payload.ni,
          currentQuestionID: state.currentQuestionID + 1,
          history: [
            ...state.history,
            {
              id: state.currentItemID,
              q: (state.currentItem as IQuestion).question,
              s: payload.sv!,
            },
          ],
          state: GlobalStates.QUESTION,
        };
        return newState;
      } else if (items[payload.ni]?.type == ItemTypes.Answer) {
        let newState: StateType = {
          ...state,
          answers: payload.answers,
          currentItem: items[payload.ni] as Item,
          currentItemID: payload.ni,
          state: GlobalStates.ANSWER,
        };
        return newState;
      }

      return state;
    case ACTION_TYPES.BACK:
      const _currentItemID =
        state.history.length > 0
          ? state.history[state.history.length - 1]?.id
          : 0;
      state.history.pop();
      const newState: StateType = {
        ...state,
        history: state.history,
        currentItemID: _currentItemID,
        currentItem: items[_currentItemID] as Item,
        currentQuestionID: state.currentQuestionID - 1,
      };
      return newState;

    case ACTION_TYPES.LOADING:
      return { ...state, loading: true };
    case ACTION_TYPES.LOADED:
      return { ...state, loading: false };

    case ACTION_TYPES.RESET:
      return INITIAL_STATE;
  }
};
