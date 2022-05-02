import React, {FC} from 'react';
import {Box, Image} from "@chakra-ui/react";
import styles from "./CharacterCard.module.scss";
import {useCharacterCardContext} from "./CharacterCardContext";

interface IProps {
}

const CharacterCardWeapon: FC<IProps> = (props) => {
  const character = useCharacterCardContext();

  return (
    <Box bg="gray.700" className={styles.weaponContainer}>
      <Image className={styles.weaponImage} src='https://frzyc.github.io/genshin-optimizer/static/media/Icon.adde095365bcfc71f248.png'/>
      <div className={styles.weaponInfo}>
        <Box as='span'>
          Копьё новичка R1
          {/*{character.weapon.name} {character.weapon.r}*/}
        </Box>
        <Box as='span'>
          Ур. 1/20
          {/*{character.weapon.lvl}*/}
        </Box>
      </div>
    </Box>
  );
};

export default CharacterCardWeapon;