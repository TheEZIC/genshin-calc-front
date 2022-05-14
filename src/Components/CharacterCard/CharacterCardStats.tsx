import React, {FC, useEffect, useState} from 'react';
import CharacterStat from "./CharacterStat";
import HPIcon from "../Icons/StatIcons/HPIcon";
import ATKIcon from "../Icons/StatIcons/ATKIcon";
import DefIcon from "../Icons/StatIcons/DefIcon";
import EMIcon from "../Icons/StatIcons/EMIcon";
import EnergyRechargeIcon from "../Icons/StatIcons/EnergyRechargeIcon";
import CritRateIcon from "../Icons/StatIcons/CritRateIcon";
import CritDMGIcon from "../Icons/StatIcons/CritDMGIcon";
import VisionIconsList from "./VisionIconsList";
import styles from "./CharacterCard.module.scss";
import {useCharacterCardContext} from "./CharacterCardContext";
import {useCalc} from "../../Reducers/useCalc";
import CalcStores from "../../CalcStores/CalcStores";
import Character from "genshin-calculator/dist/Entities/Characters/Character";

interface IProps {
  coreCharacter: Character;
}

const CharacterCardStats: FC<IProps> = (props) => {
  const character = useCharacterCardContext();
  const {coreCharacter} = props;

  const [HP, setHP] = useState<number>(coreCharacter.calculatorStats.HP.calc());
  const [atk, setAtk] = useState<number>(coreCharacter.calculatorStats.ATK.calc());
  const [def, setDef] = useState<number>(coreCharacter.calculatorStats.DEF.calc());
  const [elementalMastery, setElementalMastery] = useState<number>(coreCharacter.calculatorStats.elementalMastery.calc());
  const [energyRecharge, setEnergyRecharge] = useState<number>(coreCharacter.calculatorStats.energyRecharge.calc());
  const [critRate, setCritRate] = useState<number>(coreCharacter.calculatorStats.critChance.calc());
  const [critDamage, setCritDamage] = useState<number>(coreCharacter.calculatorStats.critDamage.calc());

  coreCharacter.calculatorStats.HP.onChange.subscribe(setHP);
  coreCharacter.calculatorStats.ATK.onChange.subscribe(setAtk);
  coreCharacter.calculatorStats.DEF.onChange.subscribe(setDef);
  coreCharacter.calculatorStats.elementalMastery.onChange.subscribe(setElementalMastery);
  coreCharacter.calculatorStats.energyRecharge.onChange.subscribe(setEnergyRecharge);
  coreCharacter.calculatorStats.critChance.onChange.subscribe(setCritRate);
  coreCharacter.calculatorStats.critDamage.onChange.subscribe(setCritDamage);

  const icons = new VisionIconsList();
  const iconItem = icons.find(character.visionType!!);

  return (
    <div className={styles.statsContainer}>
      <CharacterStat
        icon={<HPIcon/>}
        title={'HP'}
        value={HP.toFixed(0)}
      />
      <CharacterStat
        icon={<ATKIcon/>}
        title={'Сила атаки'}
        value={atk.toFixed(0)}
      />
      <CharacterStat
        icon={<DefIcon/>}
        title={'Защита'}
        value={def.toFixed(0)}
      />
      <CharacterStat
        icon={<EMIcon/>}
        title={'Мастерство стихий'}
        value={elementalMastery.toFixed(0)}
      />
      <CharacterStat
        icon={<EnergyRechargeIcon/>}
        title={'Восст. Энергии'}
        value={`${energyRecharge.toFixed(2)}%`}
      />
      <CharacterStat
        icon={<CritRateIcon/>}
        title={'Шанс крит. попадания'}
        value={`${critRate.toFixed(2)}%`}
      />
      <CharacterStat
        icon={<CritDMGIcon/>}
        title={'Крит. урон'}
        value={`${critDamage.toFixed(2)}%`}
      />
      <CharacterStat
        icon={iconItem.icon}
        title={`Бонус ${iconItem.displayName.toLowerCase()} урона`}
        value={'10.00%'}
      />
    </div>
  );
};

export default CharacterCardStats;