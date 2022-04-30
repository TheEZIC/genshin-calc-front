import React, {FC} from 'react';
import {Box, Image} from "@chakra-ui/react";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import styles from "./AllCharactersModal.module.scss";
import {useMyCharacters} from "../../Reducers/useMyCharacters";

interface IProps extends IBaseCharacter {
  onClose: () => void;
}

const AllCharactersModalItem: FC<IProps> = (props) => {
  const {addMyCharacter} = useMyCharacters();

  function handleClick() {
    addMyCharacter(props);
    props.onClose();
  }

  return (
    <Box className={styles.item} bg="gray.700" onClick={handleClick}>
      <Image
        className={styles.itemImage}
        objectFit='cover'
        src={`${process.env.PUBLIC_URL}/Assets/CharacterImages/${props.imageName}`}
      />
      <span className={styles.itemTitle}>{props.displayName}</span>
    </Box>
  );
};

export default AllCharactersModalItem;