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
    console.log(calc);
    setCalcResult(result);
  }

  return (
    Boolean(rotationSkills.length) ? (
      <Button
        leftIcon={<FaCalculator/>}
        bg="gray.700"
        size='sm'
        onClick={computeRotation}
      >
        Рассчитать
      </Button>
    ) : <></>
  );
};

export default CalculateButton;