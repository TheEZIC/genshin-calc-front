import React from 'react';
import styles from './../AllArtifactsModal.module.scss';
import ArtifactEditorAccordionSet from "./ArtifactEditorComponents/ArtifactEditorAccordionSet";
import ArtifactEditorSetRarity from "./ArtifactEditorComponents/ArtifactEditorSetRarity";

const ArtifactEditor = () => {
  return (
    <div className={styles.artifactsModalContainer}>
      <div className={styles.artifactsSetContainer}>
        <ArtifactEditorAccordionSet />
        <ArtifactEditorSetRarity />
      </div>
    </div>
  );
};

export default ArtifactEditor;