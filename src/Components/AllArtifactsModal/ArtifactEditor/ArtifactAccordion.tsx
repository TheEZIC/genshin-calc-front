import React, {FC} from 'react';
import styles from "../AllArtifactsModal.module.scss";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel, Flex
} from "@chakra-ui/react";
import ArtifactSet from "./ArtifactEditorComponents/ArtifactSet";

interface IProps {
  artifactEditor : React.ReactNode,
  setGrow: number
}

const ArtifactAccordion:FC<IProps> = (props) => {
  return (
    <div className={styles.artifactSet} style={{flexGrow: props.setGrow}}>
      <Accordion
        reduceMotion={true}
        allowToggle
        className={styles.accordionContainer}
        bg="gray.600"
      >
        <AccordionItem className={styles.accordionItemContainer}>
          <AccordionButton className={styles.accordionBody}>
            {props.artifactEditor}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel bg="gray.600" className={styles.accordionPanelContainer}>
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

export default ArtifactAccordion;