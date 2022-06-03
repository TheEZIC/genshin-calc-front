import React from 'react';
import {Image} from "@chakra-ui/react";
import styles from '../../AllArtifactsModal.module.scss';

const ArtifactSet = () => {
  return (
    <div className={styles.artifactSetContainer}>
      <Image
        className={styles.artifactSetImage}
        src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Adventurer/Flower.png`}
        objectFit='cover'
      />
      <span>Adventurer</span>
      {/*<span>props.setName</span>*/}
    </div>
  );
};

export default ArtifactSet;