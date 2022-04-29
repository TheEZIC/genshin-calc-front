import React, {FC} from 'react';
import {Box, Image} from "@chakra-ui/react";

import styles from "./CharacterFullCard.module.scss";
import PyroIcon from "../Icons/ElementIcons/PyroIcon";
import HPIcon from "../Icons/StatIcons/HPIcon";
import ATKIcon from "../Icons/StatIcons/ATKIcon";
import DefIcon from "../Icons/StatIcons/DefIcon";
import EMIcon from "../Icons/StatIcons/EMIcon";
import EnergyRechargeIcon from "../Icons/StatIcons/EnergyRechargeIcon";
import CritRateIcon from "../Icons/StatIcons/CritRateIcon";
import CritDMGIcon from "../Icons/StatIcons/CritDMGIcon";
import CharacterStat from "./CharacterStat";

const CharacterFullCard: FC = ({children}) => {
  return (
    <Box bg="gray.600" className={styles.card}>
      <div className={styles.characterContainer} style={{backgroundImage:"linear-gradient(to bottom right,rgba(89,84,130,0.3),rgba(184,134,202,0.3)), url('https://frzyc.github.io/genshin-optimizer/static/media/Banner.02accd6cf9a4395a0acd.png')"}}>
        <Image className={styles.characterImage} objectFit='cover' src={'https://frzyc.github.io/genshin-optimizer/static/media/Icon.0cbbc73454f82af5dab5.png'}/>
        <div className={styles.characterInfo}>
          <div className={styles.characterNameElement}>
            <Box as='span' className={styles.characterName}>
              Сян Лин
              {/*{character.name}*/}
            </Box>
            <div className={styles.elementIconContainer} style={{backgroundColor:"rgba(191, 40, 24,0.9)"}}>
              <PyroIcon/>
            </div>
          </div>
          <div className={styles.lvlConstellations}>
            <Box as='span'>
              Ур. 80/90
              {/*{character.lvl}*/}
            </Box>
            <Box as='span' className={styles.constellations} style={{backgroundColor:"rgba(30, 120, 200,0.9)"}}>
              C0
              {/*{character.constellations}*/}
            </Box>
          </div>
          <Box as='span'>
            Таланты 6/6/6
            {/*{character.talents}*/}
          </Box>
        </div>
      </div>
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
      <div className={styles.statsContainer}>
        <CharacterStat
          icon={<HPIcon/>}
          title={'HP'}
          value={'9999'}
        />
        <CharacterStat
          icon={<ATKIcon/>}
          title={'Сила атаки'}
          value={'9999'}
        />
        <CharacterStat
          icon={<DefIcon/>}
          title={'Защита'}
          value={'9999'}
        />
        <CharacterStat
          icon={<EMIcon/>}
          title={'Мастерство стихий'}
          value={'9999'}
        />
        <CharacterStat
          icon={<EnergyRechargeIcon/>}
          title={'Восст. Энергии'}
          value={'50%'}
        />
        <CharacterStat
          icon={<CritRateIcon/>}
          title={'Шанс крит. попадания'}
          value={'50%'}
        />
        <CharacterStat
          icon={<CritDMGIcon/>}
          title={'Крит. урон'}
          value={'50%'}
        />
        <CharacterStat
          icon={<PyroIcon/>}
          title={'Бонус пиро урона'}
          value={'50%'}
        />
      </div>
    </Box>
  );
};

export default CharacterFullCard;
