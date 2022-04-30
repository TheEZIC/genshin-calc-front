import React, {FC} from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  VStack
} from "@chakra-ui/react";
import {charactersList} from "../../CharactersList/CharactersList";
import AllCharactersModalItem from "./AllCharactersModalItem";
import {useMyCharacters} from "../../Reducers/useMyCharacters";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllCharactersModal: FC<IProps> = ({isOpen, onClose}) => {
  const {myCharacters} = useMyCharacters();

  function renderList() {
    return charactersList
      .filter(c => !myCharacters.find(m => m.name === c.name))
      .map(c => <AllCharactersModalItem {...c} onClose={onClose}/>);
  }

  return (
    isOpen ? <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent bg="gray.600">
        <ModalHeader>Выберите персонажа</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <VStack>
            {renderList()}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal> : <></>
  );
};

export default AllCharactersModal;