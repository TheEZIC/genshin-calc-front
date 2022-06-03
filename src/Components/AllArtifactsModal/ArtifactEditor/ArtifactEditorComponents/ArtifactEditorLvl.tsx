import React from 'react';
import {Editable, EditableInput, EditablePreview} from "@chakra-ui/react";

const ArtifactEditorLvl = () => {
  return (
    <div>
      <Editable defaultValue='Lvl'>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </div>
  );
};

export default ArtifactEditorLvl;