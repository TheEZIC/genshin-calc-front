import React, {FC} from 'react';
import {Container} from "@chakra-ui/react";
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

interface IProps {

}

const CharacterEditor: FC<IProps> = (props) => {
  const {characterName} = useParams<"characterName">();
  const {myCharacters} = useMyCharacters();
  const baseCharacter = myCharacters.find(c => c.name === characterName)!;

  return (
    <Container maxW="1440px">
      <h2 className={styles.pageTitle}>Редактирование персонажей</h2>
      <CharacterRow character={baseCharacter}/>
      <CharacterEditorInfo baseCharacter={baseCharacter}/>
      <CharacterEditorTalents baseCharacter={baseCharacter}/>
      <CharacterEditorStats/>
    </Container>
  );
};

export default CharacterEditor;