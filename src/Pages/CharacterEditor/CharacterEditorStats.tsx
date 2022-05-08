import React from 'react';
import {Box} from "@chakra-ui/react";
import styles from "./CharacterEditor.module.scss";
import CharacterStat from "../../Components/CharacterCard/CharacterStat";
import HPIcon from "../../Components/Icons/StatIcons/HPIcon";
import ATKIcon from "../../Components/Icons/StatIcons/ATKIcon";
import DefIcon from "../../Components/Icons/StatIcons/DefIcon";
import EMIcon from "../../Components/Icons/StatIcons/EMIcon";
import StaminaIcon from "../../Components/Icons/StatIcons/StaminaIcon";
import CritRateIcon from "../../Components/Icons/StatIcons/CritRateIcon";
import CritDMGIcon from "../../Components/Icons/StatIcons/CritDMGIcon";
import HealingBonusIcon from "../../Components/Icons/StatIcons/HealingBonusIcon";
import IncomingHealingBonusIcon from "../../Components/Icons/StatIcons/IncomingHealingBonusIcon";
import EnergyRechargeIcon from "../../Components/Icons/StatIcons/EnergyRechargeIcon";
import CDReduction from "../../Components/Icons/StatIcons/CDReduction";
import ShieldStrength from "../../Components/Icons/StatIcons/ShieldStrength";
import PyroIcon from "../../Components/Icons/ElementIcons/PyroIcon";
import HydroIcon from "../../Components/Icons/ElementIcons/HydroIcon";
import ElectroIcon from "../../Components/Icons/ElementIcons/ElectroIcon";
import AnemoIcon from "../../Components/Icons/ElementIcons/AnemoIcon";
import CryoIcon from "../../Components/Icons/ElementIcons/CryoIcon";
import GeoIcon from "../../Components/Icons/ElementIcons/GeoIcon";
import PhysicalIcon from "../../Components/Icons/ElementIcons/PhysicalIcon";

const CharacterEditorStats = () => {
  return (
    <Box bg="gray.700" className={styles.statsContainer}>
      <Box className={styles.statsItemContainer}>
        <Box as="span" className={styles.statsName}>Базовые характеристики</Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<HPIcon/>}
              title={'Макс. HP'}
              value={10}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<ATKIcon/>}
              title={'Сила атаки'}
              value={10}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<DefIcon/>}
              title={'Защита'}
              value={10}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<EMIcon/>}
              title={'Мастерство стихий'}
              value={10}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<StaminaIcon/>}
              title={'Выносливость'}
              value={10}
            />
          </div>
        </Box>
        <Box as="span" className={styles.statsName}>Второстепенные характеристики</Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<CritRateIcon/>}
              title={'Шанс крит. попадания'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<CritDMGIcon/>}
              title={'Крит. урон'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<HealingBonusIcon/>}
              title={'Бонус лечения'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<IncomingHealingBonusIcon/>}
              title={'Бонус получаемого лечения'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<EnergyRechargeIcon/>}
              title={'Восст. Энергии'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<CDReduction/>}
              title={'Снижение времени отката'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<ShieldStrength/>}
              title={'Прочность щита'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box as="span" className={styles.statsName}>Элементы</Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<PyroIcon/>}
              title={'Бонус пиро урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<PyroIcon/>}
              title={'Пиро сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<HydroIcon/>}
              title={'Бонус Гидро урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<HydroIcon/>}
              title={'Гидро сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<ElectroIcon/>}
              title={'Бонус Электро урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<ElectroIcon/>}
              title={'Электро сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<AnemoIcon/>}
              title={'Бонус Анемо урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<AnemoIcon/>}
              title={'Анемо сопротивление'}
              value={`10%`}
            />
          </div>
        </Box><Box className={styles.statsItem}>
        <Box bg="gray.400" className={styles.statsItemBackground}></Box>
        <div className={styles.statsItemContent}>
          <CharacterStat
            icon={<AnemoIcon/>}
            title={'Бонус Анемо урона'}
            value={`10%`}
          />
        </div>
      </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<AnemoIcon/>}
              title={'Анемо сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<CryoIcon/>}
              title={'Бонус Крио урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<CryoIcon/>}
              title={'Анемо сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<GeoIcon/>}
              title={'Бонус Гео урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<GeoIcon/>}
              title={'Гео сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.400" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<PhysicalIcon/>}
              title={'Бонус физ. урона'}
              value={`10%`}
            />
          </div>
        </Box>
        <Box className={styles.statsItem}>
          <Box bg="gray.900" className={styles.statsItemBackground}></Box>
          <div className={styles.statsItemContent}>
            <CharacterStat
              icon={<PhysicalIcon/>}
              title={'Физ. сопротивление'}
              value={`10%`}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterEditorStats;