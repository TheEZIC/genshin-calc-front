import React, {FC} from 'react';
import {Box, Editable, EditableInput, EditablePreview, Image} from "@chakra-ui/react";
import styles from "./CharacterEditor.module.scss";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import CalcStores from "../../CalcStores/CalcStores";
import {SkillType} from "genshin-calculator/dist/Skills/SkillType";
import {assetsUrl} from "../../App";

interface IProps {
  baseCharacter: IBaseCharacter;
}

const CharacterEditorTalents: FC<IProps> = (props) => {
  const coreCharacter = CalcStores.myCharacters.getByName(props.baseCharacter.name)!;

  const attackTalent = coreCharacter.skillManager.getSkillByType(SkillType.NormalAttack);
  const elementalTalent = coreCharacter.skillManager.getSkillByType(SkillType.Elemental);
  const burstTalent = coreCharacter.skillManager.getSkillByType(SkillType.Burst);

  return (
    <Box className={styles.characterEditContainer}>
      {attackTalent && (
        <Box className={styles.characterEditableContainerTalents} bg="gray.700">
          <Image className={styles.characterTalentsImage} src={`${assetsUrl}/Assets/Characters/${props.baseCharacter.fullName}/skills/NormalAttack.png`}/>
          <div className={styles.characterTalentsInfo}>
            <Box className={styles.characterTalentsName} as="span">{attackTalent!.skillName}</Box>
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
      )}

      {elementalTalent && (
        <Box className={styles.characterEditableContainerTalents} bg="gray.700">
          <Image className={styles.characterTalentsImage} src={`${assetsUrl}/Assets/Characters/${props.baseCharacter.fullName}/skills/ElementalSkill.png`}/>
          <div className={styles.characterTalentsInfo}>
            <Box className={styles.characterTalentsName} as="span">{elementalTalent!.skillName}</Box>
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
      )}

      {burstTalent && (
        <Box className={styles.characterEditableContainerTalents} bg="gray.700">
          <Image className={styles.characterTalentsImage} src={`${assetsUrl}/Assets/Characters/${props.baseCharacter.fullName}/skills/ElementalBurst.png`}/>
          <div className={styles.characterTalentsInfo}>
            <Box className={styles.characterTalentsName} as="span">{burstTalent!.skillName}</Box>
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
      )}
    </Box>
  );
};

export default CharacterEditorTalents;