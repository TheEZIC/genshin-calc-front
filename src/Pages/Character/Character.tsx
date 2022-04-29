import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import CharacterFullCard from "../../Components/CharacterFullCard/CharacterFullCard";
import styles from "./Character.module.scss";

const Character = () => {
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

export default Character;
