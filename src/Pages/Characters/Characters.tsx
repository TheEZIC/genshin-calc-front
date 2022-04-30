import React from 'react';
import {Container} from "@chakra-ui/react";
import styles from "./Characters.module.scss";
import CharactersList from "./CharactersList";

const Characters = () => {
  return (
    <Container maxW="1440px">
      <div className={styles.calculatorCharacterName}>
        Персонажи
      </div>
      <div className={styles.characters}>
        <EmptyCard title="Добавить нового персонажа"/>
        <CharacterFullCard/>
      </div>
    </Container>
  );
};

export default Characters;
