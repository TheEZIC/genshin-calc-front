import React, {FC} from 'react';
import {Container, Box} from "@chakra-ui/react";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import styles from "./Calculator.module.scss";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";

const Calculator: FC = () => {
  return (
    <Container maxW="1440px">
      <div className={styles.calculatorRosterName}>
        Отряд
      </div>
      <div className={styles.calculatorRoster}>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <EmptyCard title="Добавить персонажа"/>
      </div>
    </Container>
  );
};

export default Calculator;
