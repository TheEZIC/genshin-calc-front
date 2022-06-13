import React, {FC} from 'react';
import {Box, Image} from "@chakra-ui/react";
import styles from "./CharacterCard.module.scss";
import ElementIcon from "../ElementIcon/ElementIcon";
import {useCharacterCardContext} from "./CharacterCardContext";
import classNames from "classnames";
import {useMyCharacters} from "../../Reducers/useMyCharacters";

interface IProps {
  icons?: React.ReactNode;
}

const CharacterCardHeader: FC<IProps> = (props) => {
  const character = useCharacterCardContext();
  const {findMyCharacterByName} = useMyCharacters();
  const myCharacter = findMyCharacterByName(character.name)!;

  return (
    <div className={classNames(styles.characterContainer, `star${character.rarity}`)}>
      <div
        className={styles.characterNamecard}
        style={{backgroundImage:`url('${process.env.PUBLIC_URL}/Assets/Characters/${character.fullName}/Namecard.png')`}}
      />
      {props.icons && (
        <Box
          className={styles.characterDelete}
          bg="gray.700"
        >
          {props.icons}
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
            Ур. {myCharacter.lvl}/90
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