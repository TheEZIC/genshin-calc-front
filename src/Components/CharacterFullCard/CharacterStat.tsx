import React, {FC} from 'react';
import styles from "./CharacterFullCard.module.scss";
import {Box} from "@chakra-ui/react";

interface IProps {
  icon: React.ReactNode;
  title: string;
  value: string;
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