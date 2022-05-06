import React, {FC} from 'react';
import {Box, Image} from "@chakra-ui/react";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import styles from "./CharacterCard.module.scss";
import {FaTrashAlt} from "react-icons/all";
import ElementIcon from "../ElementIcon/ElementIcon";
import {useCharacterCardContext} from "./CharacterCardContext";
import classNames from "classnames";

interface IProps {
  onRemove?: (character: IBaseCharacter) => void;
}

const CharacterCardHeader: FC<IProps> = (props) => {
  const character = useCharacterCardContext();

  return (
    <div className={classNames(styles.characterContainer, `star${character.rarity}`)}>
      <div
        className={styles.characterNamecard}
        style={{backgroundImage:`url('${process.env.PUBLIC_URL}/Assets/Characters/${character.fullName}/Namecard.png')`}}
      />
      {props.onRemove && (
        <Box
          className={styles.characterDelete}
          bg="gray.700"
          onClick={() => props.onRemove && props.onRemove(props as IBaseCharacter)}
        >
          <FaTrashAlt size="20px" color="rgb(200, 60, 60)"/>
        </Box>
      )}
      <Image className={styles.characterImage} objectFit='cover' src={`${process.env.PUBLIC_URL}/Assets/Characters/${character.fullName}/Icon.png`}/>
      <div className={styles.characterInfo}>
        <div className={styles.characterNameElement}>
          <Box as='span' className={styles.characterName}>
            {character.displayName}
          </Box>
          <ElementIcon visionType={character.visionType}/>
        </div>
        <div className={styles.lvlConstellations}>
          <Box as='span'>
            Ур. 80/90
            {/*{character.lvl}*/}
          </Box>
          <Box as='span' className={styles.constellations} style={{backgroundColor:"rgba(30, 120, 200,0.9)"}}>
            C0
            {/*{character.constellations}*/}
          </Box>
        </div>
        <Box as='span'>
          Таланты 1/1/1
          {/*{character.talents}*/}
        </Box>
      </div>
    </div>
  );
};

export default CharacterCardHeader;