import React from 'react';
import styles from './../AllArtifactsModal.module.scss';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel, Box,
  Editable,
  EditableInput,
  EditablePreview
} from "@chakra-ui/react";
import ArtifactSet from "./ArtifactSet";

const ArtifactEditor = () => {
  return (
    <div className={styles.artifactsModalContainer}>
      <Accordion allowToggle>
        <AccordionItem className={styles.accordionContainer}>
          <AccordionButton className={styles.accordionBody}>
            <span className={styles.accordionHeader}>Выбор сета</span>
            <Editable className={styles.editableContainer} placeholder='Сет'>
              <EditablePreview className={styles.editablePreview} />
              <EditableInput className={styles.editableInput} />
            </Editable>
          </AccordionButton>
          <AccordionPanel bg="gray.700" className={styles.accordionItemsContainer}>
            <ArtifactSet />
            <ArtifactSet />
            <ArtifactSet />
            <ArtifactSet />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ArtifactEditor;