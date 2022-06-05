import {createContext} from "../../ReactUtils/context";
import React from "react";

export interface ISelectState {
  header: React.ReactNode;
  changeHeader: (header: React.ReactNode) => void;
  onItemClick?: () => void;
  changeHeaderOnClick: boolean;
}

const [SelectContext, useSelectContext] = createContext<ISelectState>({
  name: "SelectContext",
});

export {SelectContext, useSelectContext};