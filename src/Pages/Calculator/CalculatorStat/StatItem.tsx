import React, {FC} from 'react';
import {Stat, StatLabel, StatNumber} from "@chakra-ui/react";
import styles from "./CalculatorStat.module.scss";

interface IProps {
  text: string;
  value: string;
}

const StatItem: FC<IProps> = ({text, value}) => {
  return (
    <Stat
      className={styles.calculatorStatItem}
      bg="gray.600"
    >
      <StatLabel>{text}</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  );
};

export default StatItem;