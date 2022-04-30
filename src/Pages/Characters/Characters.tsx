import React from 'react';
import {Container} from "@chakra-ui/react";
import styles from "./Characters.module.scss";
import CharactersList from "./CharactersList";

const Characters = () => {
  return (
    <Container maxW="1440px">
      <h2 className={styles.pageTitle}>Персонажи</h2>
      <CharactersList/>
    </Container>
  );
};

export default Characters;
