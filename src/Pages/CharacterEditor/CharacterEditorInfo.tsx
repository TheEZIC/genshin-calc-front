import React from 'react';
import {Box, Editable, EditableInput, EditablePreview, Image} from "@chakra-ui/react";
import styles from "./CharacterEditor.module.scss";
import classNames from "classnames";

const CharacterEditorInfo = () => {
  return (
    <Box className={styles.characterEditContainer}>
      <Box className={styles.characterEditableContainer}  bg="gray.700">
        <Image className={styles.characterEditImage} src={`${process.env.PUBLIC_URL}/Assets/Characters/KamisatoAyaka/Constellation.png`}/>
        {/*<Image className={styles.characterEditImage} src={`${process.env.PUBLIC_URL}/Assets/Characters/${baseCharacter.fullName}/Constellation.png`}/>*/}
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Ур.</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanLevelEditable} />
            <EditableInput className={styles.characterLevelInput} />
          </Editable>
        </Box>
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Созвездие:</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable} />
            <EditableInput className={styles.characterTalentInput} />
          </Editable>
        </Box>
      </Box>
      <Box
        className={classNames(styles.characterEditableContainer)}
        // className={classNames(styles.characterEditableContainer, `star${baseCharacter.rarity}`)}
        bg="gray.700"
      >
        <Image className={styles.characterEditImage} src={`${process.env.PUBLIC_URL}/Assets/Weapons/Swords/SkywardBlade.png`}/>
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Ур.</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanLevelEditable} />
            <EditableInput className={styles.characterLevelInput} />
          </Editable>
        </Box>
        <Box className={styles.characterEditableSpanContainer} bg="gray.600">
          <Box as={"span"} className={styles.characterEditableName}>Возвышение:</Box>
          <Editable defaultValue='1'>
            <EditablePreview className={styles.characterSpanTalentEditable} />
            <EditableInput className={styles.characterTalentInput} />
          </Editable>
        </Box>
      </Box>
      <Box
        className={classNames(styles.characterEditableContainer)}
        bg="gray.700"
      >
        <Image className={styles.characterArtifactEditImage} src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/Flower.png`}/>
      </Box>
      <Box
        className={classNames(styles.characterEditableContainer)}
        bg="gray.700"
      >
        <Image className={styles.characterArtifactEditImage} src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/Plume.png`}/>
      </Box>
      <Box
        className={styles.characterEditableContainer}
        bg="gray.700"
      >
        <Image className={styles.characterArtifactEditImage} src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/Sands.png`}/>
      </Box>
      <Box
        className={styles.characterEditableContainer}
        bg="gray.700"
      >
        <Image className={styles.characterArtifactEditImage} src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/Goblet.png`}/>
      </Box>
      <Box
        className={styles.characterEditableContainer}
        bg="gray.700"
      >
        <Image className={styles.characterArtifactEditImage} src={`${process.env.PUBLIC_URL}/Assets/Artifacts/Empty/Circlet.png`}/>
      </Box>
    </Box>
  );
};

export default CharacterEditorInfo;