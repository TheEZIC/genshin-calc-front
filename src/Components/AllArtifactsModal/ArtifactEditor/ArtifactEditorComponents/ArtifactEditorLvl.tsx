import React from 'react';
import {Box, Editable, EditableInput, EditablePreview} from "@chakra-ui/react";
import styles from './../../AllArtifactsModal.module.scss';
import classNames from "classnames";

const ArtifactEditorLvl = () => {
  return (
    <Box className={classNames(styles.editorContainer, styles.accordionFixedWidth)} bg="gray.600">
      <span className={styles.editorHeader}>Уровень</span>
      <Editable defaultValue='1' placeholder='Ур'>
        <EditablePreview className={styles.editableLvl} />
        <EditableInput className={styles.editableLvl} />
      </Editable>
    </Box>
  );
};

export default ArtifactEditorLvl;