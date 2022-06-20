import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Box, Container, Image} from "@chakra-ui/react";
import styles from "./CharacterEditor.module.scss";
import CharacterRow from "../../Components/CharacterRow/CharacterRow";
import {useParams} from "react-router-dom";
import {useMyCharacters} from "../../Reducers/useMyCharacters";
import CharacterEditorInfo from "./CharacterEditorInfo";
import CharacterEditorTalents from "./CharacterEditorTalents";
import CharacterEditorStats from "./Stats/CharacterEditorStats";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import CalcStores from "../../CalcStores/CalcStores";
import ElementIcon from "../../Components/ElementIcon/ElementIcon";
import {assetsUrl} from "../../App";

interface IProps {
}

const CharacterEditor: FC<IProps> = (props) => {
  const {characterName} = useParams<"characterName">();
  const [baseCharacter, setBaseCharacter] = useState<IBaseCharacter>();
  const [coreCharacter, setCoreCharacter] = useState<Character>();
  const {myCharacters} = useMyCharacters();
  const navigate = useNavigate();

  useEffect(() => {
    const _baseCharacter = myCharacters.find(c => c.name === characterName);

    console.log(_baseCharacter, "base char in editor")

    if (!_baseCharacter) {
      return navigate("/characters");
    }

    const _coreCharacter = CalcStores.myCharacters.getByName(_baseCharacter.name);

    console.log(_coreCharacter, "core char in editor")

    if (!_coreCharacter) {
      return navigate("/characters");
    }

    setBaseCharacter(_baseCharacter);
    setCoreCharacter(_coreCharacter);
  }, []);

  return baseCharacter ? (
    <Container maxW="1440px">
      <h2 className={styles.pageTitle}>Редактирование персонажей</h2>
      <Box
        {...props}
        className={styles.fix}
        bg="gray.700"
        style={{
          backgroundImage:` 
          url('${assetsUrl}/Assets/Characters/${baseCharacter.fullName}/NamecardBanner.png')
          `,
        }}
      >
        <div className={styles.itemInfo}>
          <Image
            className={styles.itemImage}
            objectFit='cover'
            src={`${assetsUrl}/Assets/Characters/${baseCharacter.fullName}/Icon.png`}
          />
          <span className={styles.itemTitle}>{baseCharacter.displayName}</span>
        </div>
        <ElementIcon visionType={baseCharacter.visionType}/>
      </Box>
      <CharacterEditorInfo baseCharacter={baseCharacter} coreCharacter={coreCharacter!}/>
      <CharacterEditorTalents baseCharacter={baseCharacter}/>
      <CharacterEditorStats baseCharacter={baseCharacter}/>
    </Container>
  ) : <></>;
};

export default CharacterEditor;