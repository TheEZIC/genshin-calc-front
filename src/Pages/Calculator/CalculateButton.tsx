import React from 'react';
import {FaCalculator} from "react-icons/all";
import {Button} from "@chakra-ui/react";
import useRotationSkills from "../../Reducers/useRotationSkills";
import styles from "./Calculator.module.scss";
import {useCalc} from "../../Reducers/useCalc";
import useCalcResult from "../../Reducers/useCalcResult";
import {useRoster} from "../../Reducers/useRoster";

const CalculateButton = () => {
  const {rotationSkills} = useRotationSkills();
  const {setCalcResult} = useCalcResult();
  const {roster} = useRoster();
  const calc = useCalc();

  function computeRotation() {
    const result = calc.damageCalculator.calcRotation(rotationSkills);
    const characters = roster.map(r => new r.creator());

    for (let character of characters) {
      calc.roster.addCharacter(character);
      character.baseStats.applyLvl(80);
    }

    setCalcResult(result);
  }

  return (
    Boolean(rotationSkills.length) ? (
      <Button
        leftIcon={<FaCalculator/>}
        bg="gray.700"
        size='sm'
        className={styles.CalcButton}
        onClick={computeRotation}
      >
        Рассчитать
      </Button>
    ) : <></>
  );
};

export default CalculateButton;