import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import styles from "./EmptyCard.module.scss";
import {FaPlus} from "react-icons/all";

interface IProps {
  title: string;
}

const EmptyCard: FC<IProps> = ({title}) => {
  return (
    <Box bg="gray.600" className={styles.card}>
      <div className={styles.cardHeader}>
        {title}
      </div>
      <Box bg="gray.700" className={styles.plusBox}>
        <FaPlus className={styles.icon}/>
      </Box>
    </Box>
  );
};

export default EmptyCard;