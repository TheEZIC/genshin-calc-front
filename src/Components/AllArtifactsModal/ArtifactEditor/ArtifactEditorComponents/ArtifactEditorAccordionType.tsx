import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import {Image} from "@chakra-ui/react";
import {ArtifactType} from "./ArtifactTypeEnum";

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
      <span>{props.name}</span>
    </div>
  );
};

export default ArtifactEditorAccordionType;