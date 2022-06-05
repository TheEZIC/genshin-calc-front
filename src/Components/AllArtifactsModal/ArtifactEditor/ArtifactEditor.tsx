import React from 'react';
import styles from './../AllArtifactsModal.module.scss';
import ArtifactEditorAccordionSet from "./ArtifactEditorComponents/ArtifactEditorAccordionSet";
import ArtifactAccordionSetRarity from "./ArtifactEditorComponents/ArtifactAccordionSetRarity";
import ArtifactAccordion from "./ArtifactAccordion";
import ArtifactEditorLvl from "./ArtifactEditorComponents/ArtifactEditorLvl";
import ArtifactEditorAccordionType from "./ArtifactEditorComponents/ArtifactEditorAccordionType";
import ArtifactEditorStat from "./ArtifactEditorComponents/ArtifactEditorStat";

const ArtifactEditor = () => {
  return (
    <div className={styles.artifactEditor}>
      <div className={styles.artifactsEditorModal}>
        <ArtifactAccordion
          artifactEditor={<ArtifactEditorAccordionSet />}
          setGrow={1}
        />
        <ArtifactAccordion
          artifactEditor={<ArtifactAccordionSetRarity />}
          setGrow={0}
        />
      </div>
      <div className={styles.artifactsEditorModal}>
        <ArtifactAccordion
          artifactEditor={<ArtifactEditorAccordionType />}
          setGrow={1}
        />
        <ArtifactEditorLvl />
      </div>
      <div className={styles.artifactEditorStatsContainer}>
        <span className={styles.artifactEditorStatsTitle}>Главная характеристика</span>
        <div className={styles.artifactsEditorModal}>
          <ArtifactAccordion
            artifactEditor={<ArtifactEditorAccordionType />}
            setGrow={0}
          />
          <ArtifactEditorStat setGrow={1} />
        </div>
        <span className={styles.artifactEditorStatsTitle}>Дополнительные характеристики</span>
        <div className={styles.artifactsEditorModal}>
          <ArtifactAccordion
            artifactEditor={<ArtifactEditorAccordionType />}
            setGrow={0}
          />
          <ArtifactEditorStat setGrow={1} />
        </div>
        <div className={styles.artifactsEditorModal}>
          <ArtifactAccordion
            artifactEditor={<ArtifactEditorAccordionType />}
            setGrow={0}
          />
          <ArtifactEditorStat setGrow={1} />
        </div>
        <div className={styles.artifactsEditorModal}>
          <ArtifactAccordion
            artifactEditor={<ArtifactEditorAccordionType />}
            setGrow={0}
          />
          <ArtifactEditorStat setGrow={1} />
        </div>
        <div className={styles.artifactsEditorModal}>
          <ArtifactAccordion
            artifactEditor={<ArtifactEditorAccordionType />}
            setGrow={0}
          />
          <ArtifactEditorStat setGrow={1} />
        </div>
      </div>
    </div>

  );
};

export default ArtifactEditor;