import React, {FC, useState} from 'react';
import {Box, Editable, EditableInput, EditablePreview, Image} from "@chakra-ui/react";
import styles from "./CharacterEditor.module.scss";
import classNames from "classnames";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import {useMyCharacters} from "../../Reducers/useMyCharacters";
import {assetsUrl} from "../../App";

interface IProps {
  baseCharacter: IBaseCharacter;
  coreCharacter: Character;
}

const CharacterEditorInfo: FC<IProps> = (props) => {
  const {baseCharacter, coreCharacter} = props;

  const {findMyCharacterByName, changeMyCharacterLvl} = useMyCharacters();
  const myCharacter = findMyCharacterByName(baseCharacter.name)!;

  const [characterLvl, setCharacterLvl] = useState<any>(coreCharacter.lvl);

  const changeLvl = (lvl: number) => {
    setCharacterLvl(lvl);
    changeMyCharacterLvl(myCharacter, lvl);
    coreCharacter.applyLvl(lvl);
    console.log(coreCharacter);
  }

  const onLvlInputSubmit = () => {
    const lvl = Number(characterLvl);

    if (Number.isNaN(lvl)) {
      return changeLvl(coreCharacter.lvl);
    }

    if (lvl < 1) {
      return changeLvl(1);
    }

    if (lvl > 90) {
      return changeLvl(90)
    }

    changeLvl(lvl);
  }

  const onLvlInputChange = (lvl: any) => {
    console.log(lvl)
    setCharacterLvl(lvl);
  }

  return (
    <Box className={styles.characterEditContainer}>
      <Box className={styles.characterEditableContainer} bg="gray.700">
        <Image
          className={styles.characterEditImage}
          src={`${assetsUrl}/Assets/Characters/${baseCharacter.fullName}/Constellation.png`}
        />
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <span className={styles.characterEditableName}>Ур.</span>
          <Editable
            defaultValue={characterLvl}
            onSubmit={onLvlInputSubmit}
            onChange={onLvlInputChange}
            value={characterLvl}
          >
            <EditablePreview className={styles.characterSpanLevelEditable}/>
            <EditableInput className={styles.characterLevelInput}/>
          </Editable>
        </Box>
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <span className={styles.characterEditableName}>Созвездие:</span>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable}/>
            <EditableInput className={styles.characterTalentInput}/>
          </Editable>
        </Box>
      </Box>
      <Box
        className={classNames(styles.characterEditableContainer)}
        // className={classNames(styles.characterEditableContainer, `star${Weapon.rarity}`)}
        bg="gray.700"
      >
        <Image
          className={styles.characterEditImage}
          src={`${assetsUrl}/Assets/Weapons/Swords/SkywardBlade.png`}
        />
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <span className={styles.characterEditableName}>Ур.</span>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanLevelEditable} />
            <EditableInput className={styles.characterLevelInput} />
          </Editable>
        </Box>
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <span className={styles.characterEditableName}>Возвышение:</span>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable} />
            <EditableInput className={styles.characterTalentInput} />
          </Editable>
        </Box>
      </Box>
      <Box
        className={classNames(styles.characterEditableContainer)}
        // className={classNames(styles.characterEditableContainer, `star${Artifacts.rarity}`)}
        bg="gray.700"
      >
        <Image
          className={styles.characterArtifactEditImage}
          src={`${assetsUrl}/Assets/Artifacts/Empty/Flower.png`}
        />
      </Box>
      <Box
        className={classNames(styles.characterEditableContainer)}
        bg="gray.700"
      >
        <Image
          className={styles.characterArtifactEditImage}
          src={`${assetsUrl}/Assets/Artifacts/Empty/Plume.png`}
        />
      </Box>
      <Box
        className={styles.characterEditableContainer}
        bg="gray.700"
      >
        <Image
          className={styles.characterArtifactEditImage}
          src={`${assetsUrl}/Assets/Artifacts/Empty/Sands.png`}
        />
      </Box>
      <Box
        className={styles.characterEditableContainer}
        bg="gray.700"
      >
        <Image
          className={styles.characterArtifactEditImage}
          src={`${assetsUrl}/Assets/Artifacts/Empty/Goblet.png`}
        />
      </Box>
      <Box
        className={styles.characterEditableContainer}
        bg="gray.700"
      >
        <Image
          className={styles.characterArtifactEditImage}
          src={`${assetsUrl}/Assets/Artifacts/Empty/Circlet.png`}
        />
      </Box>
    </Box>
  );
};

export default CharacterEditorInfo;