import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import styles from "../CharacterEditor.module.scss";
import CharacterStat, {ICharacterStatProps} from "../../../Components/CharacterCard/CharacterStat";

interface IProps extends ICharacterStatProps {
  even: boolean;
}

const CharacterEditorStatItem: FC<IProps> = (props) => {
  return (
    <Box className={styles.statsItem}>
      <Box bg={props.even ? "gray.900" : "gray.400"} className={styles.statsItemBackground}/>
      <div className={styles.statsItemContent}>
        <CharacterStat
          icon={props.icon}
          title={props.title}
          value={props.value}
        />
      </div>
    </Box>
  );
};

export default CharacterEditorStatItem;