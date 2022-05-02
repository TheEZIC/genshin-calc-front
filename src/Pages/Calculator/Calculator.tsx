import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Container, Stat, StatGroup, VStack} from "@chakra-ui/react";
import styles from "./Calculator.module.scss";
import CalculatorCharactersList from "./CalculatorCharactersList";
import SkillTree from "./SkillTree/SkillTree";
import RotationList from "./RotationList/RotationList";
import CalculateButton from "./CalculateButton";
import CalculatorStatGroup from './CalculatorStat/CalculatorStatGroup';

const Calculator: FC = () => {
  return (
    <Container maxW="1440px">
      <div className={styles.calculatorRosterName}>
        Отряд
      </div>
      <CalculatorCharactersList/>
      <Box className={styles.rosterContainer}>
        <SkillTree/>
        <RotationList/>
      </Box>
      <Box className={styles.calcButtonContainer}>
        <CalculateButton/>
      </Box>
      <Box
        w="100%"
        className={styles.calcStatContainer}
      >
        <CalculatorStatGroup/>
      </Box>
    </Container>
  );
};

export default Calculator;
