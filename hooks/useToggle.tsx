import { useState } from "react";

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [on, setOn] = useState(initialState);
  const toggle = () => setOn((state) => !state);
  return [on, toggle];
};
