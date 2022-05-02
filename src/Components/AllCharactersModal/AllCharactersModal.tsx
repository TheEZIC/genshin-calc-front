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
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import CharacterRow from "../CharacterRow/CharacterRow";

interface IProps {
  emptyText?: string;
  allList: IBaseCharacter[];
  localList: IBaseCharacter[];
  isOpen: boolean;
  onItemClick: (character: IBaseCharacter) => void;
  onClose: () => void;
}

const AllCharactersModal: FC<IProps> = ({
  emptyText,
  allList,
  localList,
  isOpen,
  onItemClick,
  onClose
}) => {
  function handleClick(character: IBaseCharacter) {
    onItemClick(character);
    onClose();
  }

  function renderList() {
    const filtred = allList.filter(c => !localList.find(m => m.name === c.name));

    if (!filtred.length && emptyText) {
      return <span>{emptyText}</span>;
    }

    return filtred.map(c => (
      <CharacterRow
        character={c}
        onItemClick={handleClick}
      />
    ));
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