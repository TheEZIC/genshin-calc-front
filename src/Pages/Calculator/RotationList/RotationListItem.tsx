import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import {FaFileExcel, FaTrashAlt} from "react-icons/all";
import {IRotationSkill} from "../../../SkillTypes/IRotationSkill";
import styles from "./RotationList.module.scss";
import useRotationSkills from "../../../Reducers/useRotationSkills";
import {useCalc} from "../../../Reducers/useCalc";

interface IProps {
  rotationSkill: IRotationSkill;
}

const RotationListItem: FC<IProps> = ({rotationSkill}) => {
  const calc = useCalc();
  const {removeRotationSkill} = useRotationSkills();
  const skill = calc.skills.list.find(s => s.item.title === rotationSkill.title);

  if (!skill) {
    return <></>;
  }

  return (
    <>
      <Box className={styles.skillContainer}>
        <span className={styles.skillName}>{skill.item.title}</span>
        <FaTrashAlt
          className={styles.icon}
          onClick={() => removeRotationSkill(rotationSkill)}
        />
      </Box>
    </>
  );
};

export default RotationListItem;