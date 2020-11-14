import { KeyboardEvent } from "react";

export const useKeyDown = (
  keys: string[],
  action: (e: KeyboardEvent<any>) => void
): ((e: KeyboardEvent<any>) => void) => {
  const handleKeyDown = (e: KeyboardEvent<any>) => {
    keys.indexOf(e.key) > -1 && action(e);
  };
  return handleKeyDown;
};
