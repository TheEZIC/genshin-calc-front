import React, {FC} from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack
} from "@chakra-ui/react";
import ArtifactEditor from "./ArtifactEditor/ArtifactEditor";

interface IProps {
  // allList: IBaseCharacter[];
  // localList: IBaseCharacter[];
  isOpen: boolean;
  // onItemClick: (character: IBaseCharacter) => void;
  onClose: () => void;
}

const AllArtifactsModal: FC<IProps> = ({
 // allList,
 // localList,
 isOpen,
 // onItemClick,
 onClose
}) => {
  //function handleClick(character: IBaseCharacter) {
  //     onItemClick(character);
  //     onClose();
  //   }
  //
  // function renderList() {
  //   const filtred = allList.filter(c => !localList.find(m => m.name === c.name));
  //
  //   if (!filtred.length && emptyText) {
  //     return <span>{emptyText}</span>;
  //   }
  //
  //   return filtred.map(c => (
  //     <CharacterRow
  //       character={c}
  //       onItemClick={handleClick}
  //     />
  //   ));
  // }
  return (
    isOpen ? <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      {/*lg*/}
      <ModalOverlay/>
      <ModalContent bg="gray.600">
        <ModalHeader>Редактор артефактов</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <VStack>
            <ArtifactEditor />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal> : <></>
  );
};

export default AllArtifactsModal;