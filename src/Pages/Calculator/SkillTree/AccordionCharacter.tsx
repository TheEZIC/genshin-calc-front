import React, {FC} from 'react';
import {AccordionButton, AccordionItem, AccordionPanel, Box, VStack} from "@chakra-ui/react";
import {IBaseCharacter} from "../../../CharacterTypes/IBaseCharacter";
import CharacterRow from "../../../Components/CharacterRow/CharacterRow";
import styles from "./SkillTree.module.scss";
import AccordionSkillItem from "./AccordionSkillItem";
import Skill from "genshin-calculator/dist/Skills/Skill";

interface IProps {
  baseCharacter: IBaseCharacter;
  skills: Skill[];
}

const AccordionCharacter: FC<IProps> = (props) => {
  function renderSkills() {
    return props.skills.map(s => <AccordionSkillItem skill={s}/>);
  }

  return (
    <AccordionItem className={styles.accordionItem}>
      <AccordionButton className={styles.characterButton}>
        <CharacterRow
          character={props.baseCharacter}
          className={styles.characterContainer}
        />
      </AccordionButton>
      <AccordionPanel bg="gray.600" className={styles.skillItemsContainer}>
        <VStack>
          {renderSkills()}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionCharacter;