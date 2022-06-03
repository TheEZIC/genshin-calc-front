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
  const coreCharacter = CalcStores.myCharacters.getByName(props.baseCharacter.name)!;

  const [HP, setHP] = useState<number>(coreCharacter.calculatorStats.HP.calc());
  const [atk, setAtk] = useState<number>(coreCharacter.calculatorStats.ATK.calc());
  const [def, setDef] = useState<number>(coreCharacter.calculatorStats.DEF.calc());
  const [elementalMastery, setElementalMastery] = useState<number>(coreCharacter.calculatorStats.elementalMastery.calc());
  const [critRate, setCritRate] = useState<number>(coreCharacter.calculatorStats.critChance.calc());
  const [critDamage, setCritDamage] = useState<number>(coreCharacter.calculatorStats.critDamage.calc());
  //const [healingBonus, setHealingBonus] = useState<number>(coreCharacter.calculatorStats.healingBonus.calc());
  //const [incomingHealingBonus, setIncomingHealingBonus] = useState<number>(coreCharacter.calculatorStats.incomingHealingBonus.calc());
  const [energyRecharge, setEnergyRecharge] = useState<number>(coreCharacter.calculatorStats.energyRecharge.calc());
  //const [CDReduction, setCDReduction] = useState<number>(coreCharacter.calculatorStats.CDReduction.calc());
  //const [shieldStrength, setShieldStrength] = useState<number>(coreCharacter.calculatorStats.shieldStrength.calc());
  const [pyroDmgBonus, setPyroDmgBonus] = useState<number>(coreCharacter.calculatorStats.pyroDmgBonus.calc());
  const [pyroResistance, setPyroResistance] = useState<number>(coreCharacter.calculatorStats.pyroResistance.calc());
  const [hydroDmgBonus, setHydroDmgBonus] = useState<number>(coreCharacter.calculatorStats.hydroDmgBonus.calc());
  const [hydroResistance, setHydroResistance] = useState<number>(coreCharacter.calculatorStats.hydroResistance.calc());
  const [dendroDmgBonus, setDendroDmgBonus] = useState<number>(coreCharacter.calculatorStats.dendroDmgBonus.calc());
  const [dendroResistance, setDendroResistance] = useState<number>(coreCharacter.calculatorStats.dendroResistance.calc());
  const [electroDmgBonus, setElectroDmgBonus] = useState<number>(coreCharacter.calculatorStats.electroDmgBonus.calc());
  const [electroResistance, setElectroResistance] = useState<number>(coreCharacter.calculatorStats.electroResistance.calc());
  const [anemoDmgBonus, setAnemoDmgBonus] = useState<number>(coreCharacter.calculatorStats.anemoDmgBonus.calc());
  const [anemoResistance, setAnemoResistance] = useState<number>(coreCharacter.calculatorStats.anemoResistance.calc());
  const [cryoDmgBonus, setCryoDmgBonus] = useState<number>(coreCharacter.calculatorStats.cryoDmgBonus.calc());
  const [cryoResistance, setCryoResistance] = useState<number>(coreCharacter.calculatorStats.cryoResistance.calc());
  const [geoDmgBonus, setGeoDmgBonus] = useState<number>(coreCharacter.calculatorStats.geoDmgBonus.calc());
  const [geoResistance, setGeoResistance] = useState<number>(coreCharacter.calculatorStats.geoResistance.calc());
  const [physicalDmgBonus, setPhysicalDmgBonus] = useState<number>(coreCharacter.calculatorStats.physicalDmgBonus.calc());
  const [physicalResistance, setPhysicalResistance] = useState<number>(coreCharacter.calculatorStats.physicalResistance.calc());


  coreCharacter.calculatorStats.HP.onChange.subscribe(setHP);
  coreCharacter.calculatorStats.ATK.onChange.subscribe(setAtk);
  coreCharacter.calculatorStats.DEF.onChange.subscribe(setDef);
  coreCharacter.calculatorStats.elementalMastery.onChange.subscribe(setElementalMastery);
  coreCharacter.calculatorStats.critChance.onChange.subscribe(setCritRate);
  coreCharacter.calculatorStats.critDamage.onChange.subscribe(setCritDamage);
  //coreCharacter.calculatorStats.healingBonus.onChange.subscribe(setHealingBonus);
  //coreCharacter.calculatorStats.incomingHealingBonus.onChange.subscribe(setIncomingHealingBonus);
  coreCharacter.calculatorStats.energyRecharge.onChange.subscribe(setEnergyRecharge);
  //coreCharacter.calculatorStats.CDReduction.onChange.subscribe(setCDReduction);
  //coreCharacter.calculatorStats.shieldStrength.onChange.subscribe(setShieldStrength);
  coreCharacter.calculatorStats.pyroDmgBonus.onChange.subscribe(setPyroDmgBonus);
  coreCharacter.calculatorStats.pyroResistance.onChange.subscribe(setPyroResistance);
  coreCharacter.calculatorStats.hydroDmgBonus.onChange.subscribe(setHydroDmgBonus);
  coreCharacter.calculatorStats.hydroResistance.onChange.subscribe(setHydroResistance);
  coreCharacter.calculatorStats.dendroDmgBonus.onChange.subscribe(setDendroDmgBonus);
  coreCharacter.calculatorStats.dendroResistance.onChange.subscribe(setDendroResistance);
  coreCharacter.calculatorStats.electroDmgBonus.onChange.subscribe(setElectroDmgBonus);
  coreCharacter.calculatorStats.electroResistance.onChange.subscribe(setElectroResistance);
  coreCharacter.calculatorStats.anemoDmgBonus.onChange.subscribe(setAnemoDmgBonus);
  coreCharacter.calculatorStats.anemoResistance.onChange.subscribe(setAnemoResistance);
  coreCharacter.calculatorStats.cryoDmgBonus.onChange.subscribe(setCryoDmgBonus);
  coreCharacter.calculatorStats.cryoResistance.onChange.subscribe(setCryoResistance);
  coreCharacter.calculatorStats.geoDmgBonus.onChange.subscribe(setGeoDmgBonus);
  coreCharacter.calculatorStats.geoResistance.onChange.subscribe(setGeoResistance);
  coreCharacter.calculatorStats.physicalDmgBonus.onChange.subscribe(setPhysicalDmgBonus);
  coreCharacter.calculatorStats.physicalResistance.onChange.subscribe(setPhysicalResistance);

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
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<CritRateIcon/>}*/}
        {/*    title={'Шанс крит. попадания'}*/}
        {/*    value={`${critRate.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<CritDMGIcon/>}*/}
        {/*    title={'Крит. урон'}*/}
        {/*    value={`${critDamage.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<HealingBonusIcon/>}*/}
        {/*    title={'Бонус лечения'}*/}
        {/*    value={`10.0%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<IncomingHealingBonusIcon/>}*/}
        {/*    title={'Бонус получаемого лечения'}*/}
        {/*    value={`10.0%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<EnergyRechargeIcon/>}*/}
        {/*    title={'Восст. Энергии'}*/}
        {/*    value={`${energyRecharge.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<CDReduction/>}*/}
        {/*    title={'Снижение времени отката'}*/}
        {/*    value={`10.0%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<ShieldStrengthIcon/>}*/}
        {/*    title={'Прочность щита'}*/}
        {/*    value={`10.0%`}*/}
        {/*  />*/}
        {/*</CharacterEditorStatGroup>*/}
        {/*<CharacterEditorStatGroup title="Элементы">*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<PyroIcon/>}*/}
        {/*    title={'Бонус Пиро урона'}*/}
        {/*    value={`${pyroDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<PyroIcon/>}*/}
        {/*    title={'Пиро сопротивление'}*/}
        {/*    value={`${pyroResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<HydroIcon/>}*/}
        {/*    title={'Бонус Гидро урона'}*/}
        {/*    value={`${hydroDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<HydroIcon/>}*/}
        {/*    title={'Гидро сопротивление'}*/}
        {/*    value={`${hydroResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<DendroIcon/>}*/}
        {/*    title={'Бонус Дендро урона'}*/}
        {/*    value={`${dendroDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<DendroIcon/>}*/}
        {/*    title={'Дендро сопротивление'}*/}
        {/*    value={`${dendroResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<ElectroIcon/>}*/}
        {/*    title={'Бонус Электро урона'}*/}
        {/*    value={`${electroDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<ElectroIcon/>}*/}
        {/*    title={'Электро сопротивление'}*/}
        {/*    value={`${electroResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<AnemoIcon/>}*/}
        {/*    title={'Бонус Анемо урона'}*/}
        {/*    value={`${anemoDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<AnemoIcon/>}*/}
        {/*    title={'Анемо сопротивление'}*/}
        {/*    value={`${anemoResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<CryoIcon/>}*/}
        {/*    title={'Бонус Крио урона'}*/}
        {/*    value={`${cryoDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<CryoIcon/>}*/}
        {/*    title={'Крио сопротивление'}*/}
        {/*    value={`${cryoResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<GeoIcon/>}*/}
        {/*    title={'Бонус Гео урона'}*/}
        {/*    value={`${geoDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<GeoIcon/>}*/}
        {/*    title={'Гео сопротивление'}*/}
        {/*    value={`${geoResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={false}*/}
        {/*    icon={<PhysicalIcon/>}*/}
        {/*    title={'Бонус физ. урона'}*/}
        {/*    value={`${physicalDmgBonus.toFixed(1)}%`}*/}
        {/*  />*/}
        {/*  <CharacterEditorStatItem*/}
        {/*    even={true}*/}
        {/*    icon={<PhysicalIcon/>}*/}
        {/*    title={'Физ. сопротивление'}*/}
        {/*    value={`${physicalResistance.toFixed(1)}%`}*/}
        {/*  />*/}
        </CharacterEditorStatGroup>
      </Box>
    </Box>
  );
};

export default CharacterEditorStats;