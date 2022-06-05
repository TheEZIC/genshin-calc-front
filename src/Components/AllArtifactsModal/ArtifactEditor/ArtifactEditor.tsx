import React, {useEffect, useState} from 'react';
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
  const [maxSubStats, setMaxSubStats] = useState<number>(3);
  const [subStatsCount, setSubStatsCount] = useState<number>(0);

  useEffect(() => {
    if (subStatsCount > maxSubStats) {
      setSubStatsCount(maxSubStats);
    }
  }, [maxSubStats]);
  
  function renderSubStats() {
    return new Array(subStatsCount)
      .fill(1, 0, subStatsCount)
      .map((value, i) => {
        return (
          <ArtifactEditorStatRow key={`substat-row-${i}`} />
        )
      });
  }

  function addSubStatRow() {
    console.log("addSubStatRow", subStatsCount < maxSubStats, subStatsCount)
    if (subStatsCount < maxSubStats) {
      setSubStatsCount((current) => current + 1);
    }
  }

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