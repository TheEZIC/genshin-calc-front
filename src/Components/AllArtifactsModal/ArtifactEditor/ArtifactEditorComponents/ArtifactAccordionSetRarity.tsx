import React from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import StarIcon from "../../../Icons/StatIcons/StarIcon";

const ArtifactAccordionSetRarity = () => {
  return (
    <div className={styles.iconStat}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  );
};

export default ArtifactAccordionSetRarity;