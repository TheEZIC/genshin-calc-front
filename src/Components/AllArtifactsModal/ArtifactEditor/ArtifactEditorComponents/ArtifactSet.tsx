import React, {FC} from 'react';
import {Image} from "@chakra-ui/react";
import styles from '../../AllArtifactsModal.module.scss';
import {ArtifactType} from "./ArtifactTypeEnum";
import {assetsUrl} from "../../../../App";

interface IProps {
  icon: string;
  name: string;
}

const ArtifactSet:FC<IProps> = (props) => {
  return (
    <div className={styles.artifactSetContainer}>
      <Image
        className={styles.artifactSetImage}
        src={`${assetsUrl}/Assets/Artifacts/${props.icon}/Flower.png`}
        objectFit='cover'
      />
      <span>{props.name}</span>
    </div>
  );
};

export default ArtifactSet;