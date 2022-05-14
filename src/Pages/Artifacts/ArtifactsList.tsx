import React, {useState} from 'react';
import styles from "../Characters/Characters.module.scss";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import AllArtifactsModal from "../../Components/AllArtifactsModal/AllArtifactsModal";
import ArtifactCard from "../../Components/ArtifactCard/ArtifactCard";

const ArtifactsList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //  const {myCharacters, addMyCharacter, removeMyCharacter} = useMyCharacters();
  // function renderArtifacts() {
  //   return (
  //
  //   );
  // }

  return (
    <div className={styles.characters}>
      <EmptyCard
        title="Добавить новый артефакт"
        style={{width: "200px", minHeight: "200px"}}
        onClick={openModal}
      />
      {/*{renderArtifacts()}*/}
      <ArtifactCard/>
      <AllArtifactsModal
        //allList={artifactsList}
        //localList={myCharacters}
        isOpen={isOpen}
        //onItemClick={addMyCharacter}
        onClose={closeModal}
      />
    </div>
  );
};

export default ArtifactsList;