import React, {FC} from 'react';
import {Box, BoxProps} from "@chakra-ui/react";
import styles from "./EmptyCard.module.scss";
import {FaPlus} from "react-icons/all";

interface IProps extends BoxProps {
  title: string;
}

const EmptyCard: FC<IProps> = (props) => {
  return (
    <Box {...props} bg="gray.600" className={styles.card}>
      <div className={styles.cardHeader}>
        {props.title}
      </div>
      <Box bg="gray.700" className={styles.plusBox}>
        <FaPlus className={styles.icon}/>
      </Box>
    </Box>
  );
};

export default EmptyCard;