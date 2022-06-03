import React from 'react';
import {
  Accordion,
  AccordionButton, AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import styles from "../../AllArtifactsModal.module.scss";
import ArtifactSet from "./ArtifactSet";
import StarIcon from "../../../Icons/StatIcons/StarIcon";
import ArtifactSetRarity from "./ArtifactSetRarity";

const ArtifactEditorSetRarity = () => {
  return (
    <div>
      <Accordion allowToggle className={styles.accordionSetRarity}>
        <AccordionItem className={styles.accordionSetRarityContainer}>
          <AccordionButton className={styles.accordionBody}>
            <div className={styles.iconStat}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel bg="gray.700" className={styles.accordionItemsContainer}>
            <ArtifactSetRarity />
            <ArtifactSetRarity />
            <ArtifactSetRarity />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ArtifactEditorSetRarity;