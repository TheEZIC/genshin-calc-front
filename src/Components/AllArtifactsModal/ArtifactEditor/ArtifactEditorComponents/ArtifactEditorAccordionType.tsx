import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import {Image} from "@chakra-ui/react";

interface IProps {
  icon: ArtifactType;
  name: string;
}

const ArtifactEditorAccordionType:FC<IProps> = (props) => {
  return (
    <div className={styles.accordionEditorTypeContainer}>
      <Image
        className={styles.accordionTypeImage}
        src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/${props.icon}.png`}
        objectFit='cover'
      />
      <span>Цветок жизни</span>
    </div>
  );
};

export default ArtifactEditorAccordionType;