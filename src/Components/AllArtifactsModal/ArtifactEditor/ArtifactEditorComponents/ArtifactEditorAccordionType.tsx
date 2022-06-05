import React from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import {Image} from "@chakra-ui/react";

const ArtifactEditorAccordionType = () => {
  return (
    <div className={styles.accordionEditorTypeContainer}>
      <Image
        className={styles.accordionTypeImage}
        src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/Flower.png`}
      />
      <span>Цветок жизни</span>
    </div>
  );
};

export default ArtifactEditorAccordionType;