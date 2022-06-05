import React, {FC, useState} from 'react';
import {Box} from "@chakra-ui/react";
import styles from "../CharacterEditor.module.scss";
import HPIcon from "../../../Components/Icons/StatIcons/HPIcon";
import ATKIcon from "../../../Components/Icons/StatIcons/ATKIcon";
import DefIcon from "../../../Components/Icons/StatIcons/DefIcon";
import EMIcon from "../../../Components/Icons/StatIcons/EMIcon";
import StaminaIcon from "../../../Components/Icons/StatIcons/StaminaIcon";
import CritRateIcon from "../../../Components/Icons/StatIcons/CritRateIcon";
import CritDMGIcon from "../../../Components/Icons/StatIcons/CritDMGIcon";
import HealingBonusIcon from "../../../Components/Icons/StatIcons/HealingBonusIcon";
import IncomingHealingBonusIcon from "../../../Components/Icons/StatIcons/IncomingHealingBonusIcon";
import EnergyRechargeIcon from "../../../Components/Icons/StatIcons/EnergyRechargeIcon";
import CDReduction from "../../../Components/Icons/StatIcons/CDReduction";
import PyroIcon from "../../../Components/Icons/ElementIcons/PyroIcon";
import HydroIcon from "../../../Components/Icons/ElementIcons/HydroIcon";
import DendroIcon from "../../../Components/Icons/ElementIcons/DendroIcon";
import ElectroIcon from "../../../Components/Icons/ElementIcons/ElectroIcon";
import AnemoIcon from "../../../Components/Icons/ElementIcons/AnemoIcon";
import CryoIcon from "../../../Components/Icons/ElementIcons/CryoIcon";
import GeoIcon from "../../../Components/Icons/ElementIcons/GeoIcon";
import PhysicalIcon from "../../../Components/Icons/ElementIcons/PhysicalIcon";
import CharacterEditorStatGroup from "./CharacterEditorStatGroup";
import CharacterEditorStatItem from "./CharacterEditorStatItem";
import {IBaseCharacter} from "../../../CharacterTypes/IBaseCharacter";
import {useCalc} from "../../../Reducers/useCalc";
import CalcStores from "../../../CalcStores/CalcStores";
import ShieldStrengthIcon from "../../../Components/Icons/StatIcons/ShieldStrengthIcon";
import {useMyCharacters} from "../../../Reducers/useMyCharacters";

interface IProps {
  baseCharacter: IBaseCharacter;
}

const CharacterEditorStats: FC<IProps> = (props) => {
  const {findMyCharacterByName} = useMyCharacters();
  const myCharacter = findMyCharacterByName(props.baseCharacter.name)!;

  const findStatByName = (name: string) => {
    return myCharacter.stats.find(s => s.name === name)?.value;
  }

  const HP = findStatByName("Hp")!;
  const atk = findStatByName("AtkStat")!;
  const def = findStatByName("Def")!;
  const elementalMastery = findStatByName("ElementaryMastery")!;
  const critRate = findStatByName("CritChance")!;
  const critDamage = findStatByName("CritDamage")!;
  const energyRecharge = findStatByName("EnergyRecharge")!;
  const pyroDmgBonus = findStatByName("PyroDmgBonus")!;
  const pyroResistance = findStatByName("PyroResistance")!;
  const hydroDmgBonus = findStatByName("HydroDmgBonus")!;
  const hydroResistance = findStatByName("HydroResistance")!;
  const dendroDmgBonus = findStatByName("DendroDmgBonus")!;
  const dendroResistance = findStatByName("DendroResistance")!;
  const electroDmgBonus = findStatByName("ElectroDmgBonus")!;
  const electroResistance = findStatByName("ElectroResistance")!;
  const anemoDmgBonus = findStatByName("AnemoDmgBonus")!;
  const anemoResistance = findStatByName("AnemoResistance")!;
  const cryoDmgBonus = findStatByName("CryoDmgBonus")!;
  const cryoResistance = findStatByName("CryoResistance")!;
  const geoDmgBonus = findStatByName("GeoDmgBonus")!;
  const geoResistance = findStatByName("GeoResistance")!;
  const physicalDmgBonus = findStatByName("PhysicalDmgBonus")!;
  const physicalResistance = findStatByName("PhysicalResistance")!;

  // //const [healingBonus, setHealingBonus] = useState<number>(coreCharacter.calculatorStats.healingBonus.calc());
  // //const [incomingHealingBonus, setIncomingHealingBonus] = useState<number>(coreCharacter.calculatorStats.incomingHealingBonus.calc());
  // //const [CDReduction, setCDReduction] = useState<number>(coreCharacter.calculatorStats.CDReduction.calc());
  // //const [shieldStrength, setShieldStrength] = useState<number>(coreCharacter.calculatorStats.shieldStrength.calc());

  return (
    <Box bg="gray.700" className={styles.statsContainer}>
      <Box className={styles.statsItemContainer}>
        <CharacterEditorStatGroup title="Базовые характеристики">
          <CharacterEditorStatItem
            even={false}
            icon={<HPIcon/>}
            title={'Макс. HP'}
            value={HP.toFixed(0)}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<ATKIcon/>}
            title={'Сила атаки'}
            value={atk.toFixed(0)}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<DefIcon/>}
            title={'Защита'}
            value={def.toFixed(0)}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<EMIcon/>}
            title={'Мастерство стихий'}
            value={elementalMastery}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<StaminaIcon/>}
            title={'Выносливость'}
            value={100}
          />
        </CharacterEditorStatGroup>
        <CharacterEditorStatGroup title="Второстепенные характеристики">
          <CharacterEditorStatItem
            even={true}
            icon={<CritRateIcon/>}
            title={'Шанс крит. попадания'}
            value={`${critRate.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<CritDMGIcon/>}
            title={'Крит. урон'}
            value={`${critDamage.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<HealingBonusIcon/>}
            title={'Бонус лечения'}
            value={`10.0%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<IncomingHealingBonusIcon/>}
            title={'Бонус получаемого лечения'}
            value={`10.0%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<EnergyRechargeIcon/>}
            title={'Восст. Энергии'}
            value={`${energyRecharge.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<CDReduction/>}
            title={'Снижение времени отката'}
            value={`10.0%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<ShieldStrengthIcon/>}
            title={'Прочность щита'}
            value={`10.0%`}
          />
        </CharacterEditorStatGroup>
        <CharacterEditorStatGroup title="Элементы">
          <CharacterEditorStatItem
            even={false}
            icon={<PyroIcon/>}
            title={'Бонус Пиро урона'}
            value={`${pyroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<PyroIcon/>}
            title={'Пиро сопротивление'}
            value={`${pyroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<HydroIcon/>}
            title={'Бонус Гидро урона'}
            value={`${hydroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<HydroIcon/>}
            title={'Гидро сопротивление'}
            value={`${hydroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<DendroIcon/>}
            title={'Бонус Дендро урона'}
            value={`${dendroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<DendroIcon/>}
            title={'Дендро сопротивление'}
            value={`${dendroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<ElectroIcon/>}
            title={'Бонус Электро урона'}
            value={`${electroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<ElectroIcon/>}
            title={'Электро сопротивление'}
            value={`${electroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<AnemoIcon/>}
            title={'Бонус Анемо урона'}
            value={`${anemoDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<AnemoIcon/>}
            title={'Анемо сопротивление'}
            value={`${anemoResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<CryoIcon/>}
            title={'Бонус Крио урона'}
            value={`${cryoDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<CryoIcon/>}
            title={'Крио сопротивление'}
            value={`${cryoResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<GeoIcon/>}
            title={'Бонус Гео урона'}
            value={`${geoDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<GeoIcon/>}
            title={'Гео сопротивление'}
            value={`${geoResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<PhysicalIcon/>}
            title={'Бонус физ. урона'}
            value={`${physicalDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<PhysicalIcon/>}
            title={'Физ. сопротивление'}
            value={`${physicalResistance.toFixed(1)}%`}
          />
        </CharacterEditorStatGroup>
      </Box>
    </Box>
  );
};

export default CharacterEditorStats;