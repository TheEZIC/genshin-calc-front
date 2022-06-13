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
import {useMyCharacters} from "../../Reducers/useMyCharacters";

interface IProps {
  coreCharacter: Character;
}

const CharacterCardStats: FC<IProps> = (props) => {
  const character = useCharacterCardContext();
  const {findMyCharacterByName} = useMyCharacters();
  const myCharacter = findMyCharacterByName(character.name);

  if (!myCharacter) {
    return <></>;
  }

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