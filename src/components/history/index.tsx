"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface HistoryType {
  id: number;
  q: string;
  s: string[];
}

export function useSelectionHistory(): SelectionHistory {
  //   props: {
  //   setLoading?: Function;
  // }
  const [messages, setMessages] = useState<HistoryType[]>([]);

  // useEffect(() => {
  //   if (props?.setLoading) {
  //     props?.setLoading(false);
  //   }
  // }, [messages]);

  function addHistory(_question: string, _selected: string[], _id: number) {
    // if (props?.setLoading) {
    //   props?.setLoading(true);
    // }
    var _history: HistoryType = {
      id: _id,
      q: _question,
      s: _selected,
    };

    setMessages([...messages, _history]);
  }

  function popHistory() {
    // if (props?.setLoading) {
    //   props?.setLoading(true);
    // }
    messages.pop();
    setMessages(messages);
  }

  function clearHistory() {
    // if (props?.setLoading) {
    //   props.setLoading(true);
    // }
    setMessages([]);
  }

  return {
    messages: messages,
    addHistory: addHistory,
    popHistory: popHistory,
    clearHistory: clearHistory,
  };
}

export type SelectionHistory = {
  messages: HistoryType[];
  addHistory: (_question: string, _selected: string[], _id: number) => void;
  popHistory: () => void;
  clearHistory: () => void;
};
