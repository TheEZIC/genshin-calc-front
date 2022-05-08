import React, {useState} from 'react';
import styles from "./Characters.module.scss";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import AllCharactersModal from "../../Components/AllCharactersModal/AllCharactersModal";
import {useMyCharacters} from "../../Reducers/useMyCharacters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import {charactersList} from "../../CharactersList/CharactersList";

const CharactersList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {myCharacters, addMyCharacter, removeMyCharacter} = useMyCharacters();

  function renderCharacters() {
    return myCharacters.map(c => (
      <CharacterCard character={c} w="370px">
        <CharacterCard.Header {...c} onRemove={() => removeMyCharacter(c)}/>
        <CharacterCard.Weapon {...c}/>
        <CharacterCard.Stats {...c}/>
      </CharacterCard>
    ));
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
        allList={charactersList}
        localList={myCharacters}
        isOpen={isOpen}
        onItemClick={addMyCharacter}
        onClose={closeModal}
      />
    </div>
  );
};

export default CharactersList;