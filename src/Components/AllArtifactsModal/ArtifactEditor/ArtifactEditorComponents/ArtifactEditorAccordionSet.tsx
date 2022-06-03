import React from 'react';
import {
  Accordion,
  AccordionButton, AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Editable,
  EditableInput,
  EditablePreview
} from "@chakra-ui/react";
import styles from "../../AllArtifactsModal.module.scss";
import ArtifactSet from "./ArtifactSet";

const ArtifactEditorAccordionSet = () => {
  return (
    <div className={styles.artifactSet}>
      <Accordion allowToggle>
        <AccordionItem className={styles.accordionContainer}>
          <AccordionButton className={styles.accordionBody}>
            <div>
              <span className={styles.accordionHeader}>Выбор сета</span>
              <Editable className={styles.editableContainer} placeholder='Сет'>
                <EditablePreview className={styles.editablePreview} />
                <EditableInput className={styles.editableInput} />
              </Editable>
            </div>
            <AccordionIcon />
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

export default ArtifactEditorAccordionSet;