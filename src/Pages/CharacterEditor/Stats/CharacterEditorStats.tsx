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
        <CharacterEditorStatGroup title="?????????????? ????????????????????????????">
          <CharacterEditorStatItem
            even={false}
            icon={<HPIcon/>}
            title={'????????. HP'}
            value={HP.toFixed(0)}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<ATKIcon/>}
            title={'???????? ??????????'}
            value={atk.toFixed(0)}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<DefIcon/>}
            title={'????????????'}
            value={def.toFixed(0)}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<EMIcon/>}
            title={'???????????????????? ????????????'}
            value={elementalMastery}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<StaminaIcon/>}
            title={'????????????????????????'}
            value={100}
          />
        </CharacterEditorStatGroup>
        <CharacterEditorStatGroup title="???????????????????????????? ????????????????????????????">
          <CharacterEditorStatItem
            even={true}
            icon={<CritRateIcon/>}
            title={'???????? ????????. ??????????????????'}
            value={`${critRate.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<CritDMGIcon/>}
            title={'????????. ????????'}
            value={`${critDamage.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<HealingBonusIcon/>}
            title={'?????????? ??????????????'}
            value={`10.0%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<IncomingHealingBonusIcon/>}
            title={'?????????? ?????????????????????? ??????????????'}
            value={`10.0%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<EnergyRechargeIcon/>}
            title={'??????????. ??????????????'}
            value={`${energyRecharge.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<CDReduction/>}
            title={'???????????????? ?????????????? ????????????'}
            value={`10.0%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<ShieldStrengthIcon/>}
            title={'?????????????????? ????????'}
            value={`10.0%`}
          />
        </CharacterEditorStatGroup>
        <CharacterEditorStatGroup title="????????????????">
          <CharacterEditorStatItem
            even={false}
            icon={<PyroIcon/>}
            title={'?????????? ???????? ??????????'}
            value={`${pyroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<PyroIcon/>}
            title={'???????? ??????????????????????????'}
            value={`${pyroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<HydroIcon/>}
            title={'?????????? ?????????? ??????????'}
            value={`${hydroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<HydroIcon/>}
            title={'?????????? ??????????????????????????'}
            value={`${hydroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<DendroIcon/>}
            title={'?????????? ???????????? ??????????'}
            value={`${dendroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<DendroIcon/>}
            title={'???????????? ??????????????????????????'}
            value={`${dendroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<ElectroIcon/>}
            title={'?????????? ?????????????? ??????????'}
            value={`${electroDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<ElectroIcon/>}
            title={'?????????????? ??????????????????????????'}
            value={`${electroResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<AnemoIcon/>}
            title={'?????????? ?????????? ??????????'}
            value={`${anemoDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<AnemoIcon/>}
            title={'?????????? ??????????????????????????'}
            value={`${anemoResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<CryoIcon/>}
            title={'?????????? ???????? ??????????'}
            value={`${cryoDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<CryoIcon/>}
            title={'???????? ??????????????????????????'}
            value={`${cryoResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<GeoIcon/>}
            title={'?????????? ?????? ??????????'}
            value={`${geoDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<GeoIcon/>}
            title={'?????? ??????????????????????????'}
            value={`${geoResistance.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={false}
            icon={<PhysicalIcon/>}
            title={'?????????? ??????. ??????????'}
            value={`${physicalDmgBonus.toFixed(1)}%`}
          />
          <CharacterEditorStatItem
            even={true}
            icon={<PhysicalIcon/>}
            title={'??????. ??????????????????????????'}
            value={`${physicalResistance.toFixed(1)}%`}
          />
        </CharacterEditorStatGroup>
      </Box>
    </Box>
  );
};

export default CharacterEditorStats;