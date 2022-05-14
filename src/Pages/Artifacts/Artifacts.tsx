import React from 'react';
import styles from "./Artifacts.module.scss";
import {Container} from "@chakra-ui/react";
import ArtifactsList from "./ArtifactsList";

const Artifacts = () => {
  return (
    <Container maxW="1440px">
      <h2 className={styles.pageTitle}>Артефакты</h2>
      <ArtifactsList/>
    </Container>
  );
};

export default Artifacts;