import React from 'react';
import {
  Editable,
  EditableInput,
  EditablePreview
} from "@chakra-ui/react";
import styles from "../../AllArtifactsModal.module.scss";

const ArtifactEditorAccordionSet = () => {
  return (
    <div className={styles.accordionEditorContainer}>
      <span className={styles.editorHeader}>Выбор сета</span>
      <Editable placeholder='Сет'>
        <EditablePreview />
        <EditableInput className={styles.editableInput} />
      </Editable>
    </div>
  );
};

export default ArtifactEditorAccordionSet;