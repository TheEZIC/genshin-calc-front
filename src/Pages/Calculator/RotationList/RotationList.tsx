import React from 'react';
import {Box, Button, VStack} from "@chakra-ui/react";
import styles from "./RotationList.module.scss";
import useRotationSkills from "../../../Reducers/useRotationSkills";
import {FaFileExcel} from "react-icons/all";
import RotationListItem from "./RotationListItem";

const RotationList = () => {
  const {rotationSkills, clearRotationSkills} = useRotationSkills();

  function renderRotationSkills() {
    return rotationSkills.map((s, i) => <RotationListItem key={`RotationSkill${i}`} rotationSkill={s}/>);
  }

  return (
    <Box bg="gray.600" className={styles.container}>
      {Boolean(rotationSkills.length) && (
        <Box
          className={styles.RotationListClean}
          bg="gray.700"
          onClick={clearRotationSkills}
        >
          <FaFileExcel size="25px"/>
        </Box>
      )}
      <VStack>
        {renderRotationSkills()}
      </VStack>
    </Box>
  );
};

export default RotationList;