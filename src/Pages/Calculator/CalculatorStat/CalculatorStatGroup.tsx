import React from 'react';
import {Box, StatGroup} from "@chakra-ui/react";
import styles from "./CalculatorStat.module.scss";
import StatItem from "./StatItem";
import useCalcResult from "../../../Reducers/useCalcResult";

const CalculatorStatGroup = () => {
  const {calcResult} = useCalcResult();

  return (
    rotationSkills.length ? (
      <Box
        className={styles.calculatorStat}
      >
        {calcResult && (
          <>
            <StatItem text="Урон" value={`${calcResult.damage.toFixed(0)}`}/>
            <StatItem text="Секунды" value={`${(calcResult.frames/60).toFixed(2)}`}/>
          </>
        )}
      </Box>
    ) : <></>
  );
};

export default CalculatorStatGroup;