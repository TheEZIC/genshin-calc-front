import React, {FC} from 'react';
import {Box, BoxProps, Image} from "@chakra-ui/react";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import styles from "./CharacterRow.module.scss";
import ElementIcon from "../ElementIcon/ElementIcon";
import classNames from "classnames";
import {assetsUrl} from "../../App";

interface IProps extends BoxProps {
  character: IBaseCharacter;
  onItemClick?: (character: IBaseCharacter) => void;
}

const CharacterRow: FC<IProps> = (props) => {
  const {character, onItemClick} = props;

  function handleClick() {
    onItemClick?.(character);
  }

  return (
    <Box
      {...props}
      className={classNames(props.className, styles.item)}
      bg="gray.700"
      onClick={handleClick}
      style={{
        backgroundImage:` 
          url('${assetsUrl}/Assets/Characters/${character.fullName}/NamecardBanner.png')
          `,
      }}
    >
      <div className={styles.itemInfo}>
        <Image
          className={styles.itemImage}
          objectFit='cover'
          src={`${assetsUrl}/Assets/Characters/${character.fullName}/Icon.png`}
        />
        <span className={styles.itemTitle}>{character.displayName}</span>
      </div>
      <ElementIcon visionType={character.visionType}/>
    </Box>
  );
};

export default CharacterRow;