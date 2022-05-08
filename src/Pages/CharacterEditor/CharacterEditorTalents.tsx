import React, {FC} from 'react';
import {Box, Editable, EditableInput, EditablePreview, Image} from "@chakra-ui/react";
import styles from "./CharacterEditor.module.scss";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";

interface IProps {
  baseCharacter: IBaseCharacter;
}

const CharacterEditorTalents: FC<IProps> = (props) => {
  return (
    <Box className={styles.characterEditContainer}>
      <Box className={styles.characterEditableContainerTalents} bg="gray.700">
        <Image className={styles.characterTalentsImage} src={`${process.env.PUBLIC_URL}/Assets/Characters/${props.baseCharacter.fullName}/skills/NormalAttack.png`}/>
        <div className={styles.characterTalentsInfo}>
          <Box className={styles.characterTalentsName} as="span">Нанамэ</Box>
          <Box className={styles.characterTalentsType} as="span">Normal/Charged Attack</Box>
        </div>
        <Box className={styles.characterEditableTalentSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Талант Ур.</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable} />
            <EditableInput className={styles.characterTalentInput} />
          </Editable>
        </Box>
      </Box>
      <Box className={styles.characterEditableContainerTalents} bg="gray.700">
        <Image className={styles.characterTalentsImage} src={`${process.env.PUBLIC_URL}/Assets/Characters/${props.baseCharacter.fullName}/skills/ElementalSkill.png`}/>
        <div className={styles.characterTalentsInfo}>
          <Box className={styles.characterTalentsName} as="span">Искусство Камисато: Хёка</Box>
          <Box className={styles.characterTalentsType} as="span">Elemental Skill</Box>
        </div>
        <Box className={styles.characterEditableTalentSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Талант Ур.</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable} />
            <EditableInput className={styles.characterTalentInput} />
          </Editable>
        </Box>
      </Box>
      <Box className={styles.characterEditableContainerTalents} bg="gray.700">
        <Image className={styles.characterTalentsImage} src={`${process.env.PUBLIC_URL}/Assets/Characters/${props.baseCharacter.fullName}/skills/ElementalBurst.png`}/>
        <div className={styles.characterTalentsInfo}>
          <Box className={styles.characterTalentsName} as="span">Искусство Камисато: Сомэцу</Box>
          <Box className={styles.characterTalentsType} as="span">Elemental Burst</Box>
        </div>
        <Box className={styles.characterEditableTalentSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Талант Ур.</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable} />
            <EditableInput className={styles.characterTalentInput} />
          </Editable>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterEditorTalents;