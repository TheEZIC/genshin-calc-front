import React, {useState} from 'react';
import styles from "./Characters.module.scss";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import AllCharactersModal from "../../Components/AllCharactersModal/AllCharactersModal";
import {useMyCharacters} from "../../Reducers/useMyCharacters";
import CharacterFullCard from "../../Components/CharacterFullCard/CharacterFullCard";
import {charactersList} from "../../CharactersList/CharactersList";

const CharactersList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {myCharacters} = useMyCharacters();

  function renderCharacters() {
    return myCharacters.map(c => <CharacterFullCard {...c}/>)
  }

  return (
    <div className={styles.characters}>
      {myCharacters.length !== charactersList.length && <EmptyCard
        title="Добавить нового персонажа"
        style={{width: "370px"}}
        onClick={openModal}
      />}
      {renderCharacters()}
      <AllCharactersModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default CharactersList;