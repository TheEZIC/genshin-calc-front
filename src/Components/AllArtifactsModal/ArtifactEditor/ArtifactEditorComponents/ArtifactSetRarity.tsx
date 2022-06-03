import React from 'react';
import StarIcon from "../../../Icons/StatIcons/StarIcon";
import styles from "../../AllArtifactsModal.module.scss";

const ArtifactSetRarity = () => {
  return (
    <div className={styles.artifactSetContainer}>
      <div className={styles.iconRarityStat}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
};

export default ArtifactSetRarity;