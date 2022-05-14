import React from 'react';
import {Box} from "@chakra-ui/react";
import styles from "./ArtifactCard.module.scss";
import HPIcon from "../Icons/StatIcons/HPIcon";

const ArtifactStat = () => {
  return (
    <Box
      className={styles.statsItem}
    >
      <div className={styles.iconStat}>
        <HPIcon/>
      </div>
      <Box as="span">100</Box>
    </Box>
  );
};

export default ArtifactStat;