import { useReducer } from "react";

export const ACTION = {
  CLOSE_BAR: "CLOSE_BAR",
  OPEN_BAR: "OPEN_BAR",
  TOGGLE_BAR: "TOGGLE_BAR",
} as const;

const initialState = {
  isOpen: false,
};

type Action = {
  type: keyof typeof ACTION;
};

export type Reducer = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

export const defaultReducer: Reducer = (state, action) => {
  switch (action.type) {
    case ACTION["OPEN_BAR"]:
      return {
        isOpen: true,
      };
    case ACTION["CLOSE_BAR"]:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export const useSidebar = (reducer = defaultReducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openBar = dispatch.bind(null, { type: ACTION["OPEN_BAR"] });
  const closeBar = dispatch.bind(null, { type: ACTION["CLOSE_BAR"] });
  const toggleBar = dispatch.bind(null, { type: ACTION["TOGGLE_BAR"] });

  return {
    isOpen: state.isOpen,
    openBar,
    closeBar,
    toggleBar,
  };
};
