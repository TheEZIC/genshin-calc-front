import {IBaseCharacter} from "./IBaseCharacter";

export interface IBaseCharacterWithStats extends IBaseCharacter {
  hp: number;
  atk: number;
  def: number;
  elementalMastery: number;
  critRate: number;
  critDamage: number;
  energyRecharge: number;
  //elemental
  pyroDmgBonus: number;
  pyroResistance: number;
  hydroDmgBonus: number;
  hydroResistance: number;
  electroDamage: number;
  electroResistance: number;
  anemoDmgBonus: number;
  anemoResistance: number;
  cryoDamageBonus: number;
  cryoResistance: number;
  geoDamageBonus: number;
  geoResistance: number;
  physicalDmgBonus: number;
  physicalResistence: number;
}
