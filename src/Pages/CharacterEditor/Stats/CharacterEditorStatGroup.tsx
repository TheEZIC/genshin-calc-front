import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import styles from "../CharacterEditor.module.scss";

interface IProps {
  title: string;
}

const CharacterEditorStatGroup: FC<IProps> = (props) => {
  return (
    <>
      <Box as="span" className={styles.statsName}>{props.title}</Box>
      {props.children}
    </>
  );
};

export default CharacterEditorStatGroup;