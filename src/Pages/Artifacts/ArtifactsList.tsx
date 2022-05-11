import React, {useState} from 'react';
import styles from "../Characters/Characters.module.scss";
import {charactersList} from "../../CharactersList/CharactersList";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import AllCharactersModal from "../../Components/AllCharactersModal/AllCharactersModal";
import AllArtifactsModal from "../../Components/AllArtifactsModal/AllArtifactsModal";

const ArtifactsList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //  const {myCharacters, addMyCharacter, removeMyCharacter} = useMyCharacters();

  return (
    <div className={styles.characters}>
      <EmptyCard
        title="Добавить новый артефакт"
        style={{width: "370px"}}
        onClick={openModal}
      />
      {/*{renderCharacters()}*/}
      <AllArtifactsModal
        //allList={charactersList}
        //localList={myCharacters}
        isOpen={isOpen}
        //onItemClick={addMyCharacter}
        onClose={closeModal}
      />
    </div>
  );
};

export default ArtifactsList;