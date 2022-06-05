import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import {Editable, EditableInput, EditablePreview} from "@chakra-ui/react";

interface IProps {
  setGrow: number
}

const ArtifactEditorStat:FC<IProps> = (props) => {
  return (
    <Editable
      className={styles.editorStatContainer}
      bg="gray.600"
      defaultValue='0'
      placeholder='0'
      // style={{flexGrow: props.setGrow}}
    >
      <EditablePreview className={styles.editableStat} />
      <EditableInput className={styles.editableStat} />
    </Editable>
  );
};

export default ArtifactEditorStat;