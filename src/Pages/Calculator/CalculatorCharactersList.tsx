import React, {useState, useEffect} from 'react';
import {useMyCharacters} from "../../Reducers/useMyCharacters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import AllCharactersModal from "../../Components/AllCharactersModal/AllCharactersModal";
import {useRoster} from "../../Reducers/useRoster";
import styles from "../Characters/Characters.module.scss";
import {useCalc} from "../../Reducers/useCalc";
import {FaTrashAlt} from "react-icons/all";
import CalcStores from "../../CalcStores/CalcStores";

const CalculatorCharactersList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {myCharacters} = useMyCharacters();
  const {roster, addCharacter, removeCharacter} = useRoster();
  const calc = useCalc();

  useEffect(() => {
    console.log(calc.roster.characters, CalcStores.myCharacters);
  }, [roster])

  function renderCharacters() {
    return roster.map(c => (
      <CharacterCard character={c} w="330px">
        <CharacterCard.Header icons={(
          <FaTrashAlt
            className={styles.icon}
            onClick={() => removeCharacter(c)}
          />
        )}/>
        <CharacterCard.Weapon/>
      </CharacterCard>
    ));
  }

  return (
    <div className={styles.characters}>
      {renderCharacters()}
      {myCharacters.length !== 4 && <EmptyCard
        title="Добавить персонажа в отряд"
        style={{width: "330px"}}
        onClick={openModal}
      />}
      <AllCharactersModal
        emptyText='Ваш список персонажей пуст'
        allList={myCharacters}
        localList={roster}
        isOpen={isOpen}
        onItemClick={addCharacter}
        onClose={closeModal}
      />
    </div>
  );
};

export default CalculatorCharactersList;