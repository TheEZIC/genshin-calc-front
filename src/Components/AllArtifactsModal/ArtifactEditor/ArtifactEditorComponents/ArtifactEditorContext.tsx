import React from "react";
import {createContext} from "../../../../ReactUtils/context";

export interface IArtifactEditorContextState {
  maxSubStats: number;
  setMaxSubStats:  React.Dispatch<React.SetStateAction<number>>;
  subStatsCount: number;
  setSubStatsCount:  React.Dispatch<React.SetStateAction<number>>;
}

const [ArtifactEditorContext, useArtifactEditorContext] = createContext<IArtifactEditorContextState>({
  name: "artifactEditorContext",
});

export {ArtifactEditorContext, useArtifactEditorContext};