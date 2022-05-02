import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import styles from "./CharacterCard.module.scss";

interface IProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const CharacterStat: FC<IProps> = ({icon,title,value}) => {
  return (
    <div className={styles.stats}>
      <div className={styles.iconStat}>
        {icon}
        <Box as='span'>
          {title}
        </Box>
      </div>
      <Box as='span'>
        {value}
      </Box>
    </div>
  );
};

export default CharacterStat;