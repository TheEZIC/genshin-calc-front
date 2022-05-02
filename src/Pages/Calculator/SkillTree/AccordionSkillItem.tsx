import React, {FC} from 'react';
import styles from "./SkillTree.module.scss";
import {Box} from "@chakra-ui/react";
import {FaPlus} from "react-icons/all";
import Skill from "genshin-calculator/dist/Skills/Skill";
import useRotationSkills from "../../../Reducers/useRotationSkills";

interface IProps {
  skill: Skill;
}

const AccordionSkillItem: FC<IProps> = ({skill}) => {
  const {addRotationSkill} = useRotationSkills();

  return (
    <Box className={styles.skillItem} onClick={() => addRotationSkill(skill)}>
      <Box as="span">{skill.name}</Box>
      <FaPlus/>
    </Box>
  );
};

export default AccordionSkillItem;