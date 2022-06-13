import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import {Image} from "@chakra-ui/react";
import {ArtifactType} from "./ArtifactTypeEnum";
import {assetsUrl} from "../../../../App";

interface IProps {
  icon: ArtifactType;
  name: string;
}

const ArtifactEditorAccordionType:FC<IProps> = (props) => {
  return (
    <div className={styles.accordionEditorTypeContainer}>
      <Image
        className={styles.accordionTypeImage}
        src={`${assetsUrl}/Assets/Artifacts/Empty/${props.icon}.png`}
        objectFit='cover'
      />
      <span>{props.name}</span>
    </div>
  );
};

export default ArtifactEditorAccordionType;