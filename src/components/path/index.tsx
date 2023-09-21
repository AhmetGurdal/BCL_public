import { useState } from "react";

export const usePath = (): PathHookType => {
  const [path, setPath] = useState<number[]>([]);

  const addPath = (index: number) => {
    setPath([...path, index]);
  };

  const popPath = () => {
    path.pop();
    setPath(path);
  };

  return { path, addPath, popPath };
};

type PathHookType = {
  path: number[];
  addPath: (index: number) => void;
  popPath: () => void;
};
