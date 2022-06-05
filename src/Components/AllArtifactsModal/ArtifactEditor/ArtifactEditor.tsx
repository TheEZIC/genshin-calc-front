import React from 'react';
import styles from './../AllArtifactsModal.module.scss';
import ArtifactEditorLvl from "./ArtifactEditorComponents/ArtifactEditorLvl";
import ArtifactEditorStatRow from "./ArtifactEditorComponents/ArtifactEditorStatRow";
import {Box} from "@chakra-ui/react";
import {FaPencilAlt, FaPlus, FaTrashAlt} from "react-icons/all";
import AccordionSet from "./ArtifactEditorComponents/Accordions/AccordionSet";
import AccordionRarity from "./ArtifactEditorComponents/Accordions/AccordionRarity";
import AccordionType from "./ArtifactEditorComponents/Accordions/AccordionType";
import { ArtifactEditorContext } from './ArtifactEditorComponents/ArtifactEditorContext';

const ArtifactEditor = () => {
  return (
    <ArtifactEditorContext value={{
      subStatsCount,
      setSubStatsCount,
      maxSubStats,
      setMaxSubStats,
    }}>
      <div className={styles.artifactEditor}>
        {/*Выбор сета и звезд*/}
        <div className={styles.artifactsEditorModal}>
          <AccordionSet />
          <AccordionRarity />
        </div>
        {/*Выбор типа и уровня*/}
        <div className={styles.artifactsEditorModal}>
          <AccordionType />
          <ArtifactEditorLvl />
        </div>
        {/*Характеристики*/}
        <div className={styles.artifactEditorStatsContainer}>
          <span className={styles.artifactEditorStatsTitle}>Главная характеристика</span>
          <ArtifactEditorStatRow />
          <span className={styles.artifactEditorStatsTitle}>Дополнительные характеристики</span>
          {renderSubStats()}
          {subStatsCount < maxSubStats && <Box
            bg="gray.600"
            className={styles.artifactEditorButton}
            onClick={addSubStatRow}
          >
            <FaPlus className={styles.icon}/>
          </Box>}
        </div>
      </div>
    </ArtifactEditorContext>
  );
};

export default ArtifactEditor;