import {ITalent} from "./ITalent";
import {IBaseCharacter} from "./IBaseCharacter";

export interface IMyCharacterStat {
  name: string;
  value: number;
}

export interface IMyCharacter extends IBaseCharacter {
  lvl: number;
  talents: ITalent[];
}
