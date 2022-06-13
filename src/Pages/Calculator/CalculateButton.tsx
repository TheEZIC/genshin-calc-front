import React from 'react';
import {FaCalculator} from "react-icons/all";
import {Button} from "@chakra-ui/react";
import useRotationSkills from "../../Reducers/useRotationSkills";
import styles from "./Calculator.module.scss";
import {useCalc} from "../../Reducers/useCalc";
import useCalcResult from "../../Reducers/useCalcResult";
import {useRoster} from "../../Reducers/useRoster";
import Skill from "genshin-calculator/dist/Skills/Skill";

const CalculateButton = () => {
  const {rotationSkills} = useRotationSkills();
  const {setCalcResult} = useCalcResult();
  const calc = useCalc();

  function computeRotation() {
    const skills: Skill[] = []

    for (let rotationSkill of rotationSkills) {
      const coreSkill = calc.skills.list.find(s => s.item.title === rotationSkill.title);

      if (coreSkill) {
        skills.push(coreSkill.item);
      }
    }

    const result = calc.damageCalculator.calcRotation(skills);
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