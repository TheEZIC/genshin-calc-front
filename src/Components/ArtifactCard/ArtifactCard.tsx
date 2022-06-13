import React from 'react';
import {Box, Image} from "@chakra-ui/react";
import styles from "./ArtifactCard.module.scss";
import {FaPencilAlt, FaTrashAlt} from "react-icons/all";
import ArtifactStat from "./ArtifactStat";
import {assetsUrl} from "../../App";

const ArtifactCard = () => {
  return (
    <Box bg="gray.600" className={styles.card}>
      <Box
        className={styles.artifactDelete}
        bg="gray.700"
      >
        <FaTrashAlt
          className={styles.icon}
          // onClick={() => removeMyCharacter(c)}
        />
        <FaPencilAlt className={styles.icon}/>
      </Box>
      <Image className={styles.artifactImage} objectFit='cover' src={`${assetsUrl}/Assets/Artifacts/Adventurer/Flower.png`}/>
      <Box
        className={styles.artifactStat}
        bg="gray.700"
      >
        <div className={styles.artifactMainStatContainer}>
          <ArtifactStat/>
        </div>
        <div className={styles.artifactSubStatContainer}>
          <ArtifactStat/>
          <ArtifactStat/>
          <ArtifactStat/>
          <ArtifactStat/>
        </div>

      </Box>
    </Box>
  );
};

export default ArtifactCard;