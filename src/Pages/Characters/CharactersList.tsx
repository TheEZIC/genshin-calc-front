import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./Characters.module.scss";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import AllCharactersModal from "../../Components/AllCharactersModal/AllCharactersModal";
import {useMyCharacters} from "../../Reducers/useMyCharacters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import {charactersList} from "../../CharactersList/CharactersList";
import {FaPencilAlt, FaTrashAlt} from "react-icons/all";
import CalcStores from "../../CalcStores/CalcStores";

const CharactersList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {myCharacters, addMyCharacter, removeMyCharacter} = useMyCharacters();

  function renderCharacters() {
    return myCharacters.map(c => {
      const coreCharacter = CalcStores.myCharacters.getByName(c.name)!;

      return (
        <CharacterCard character={c} w="370px">
          <CharacterCard.Header icons={(
            <>
              <FaTrashAlt
                className={styles.iconTrashAlt}
                onClick={() => removeMyCharacter(c)}
              />
              <Link to={`/characters/${c.name}`}>
                <FaPencilAlt className={styles.iconPencilAlt}/>
              </Link>
            </>
          )}/>
          <CharacterCard.Weapon/>
          <CharacterCard.Stats coreCharacter={coreCharacter}/>
        </CharacterCard>
      )
    });
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