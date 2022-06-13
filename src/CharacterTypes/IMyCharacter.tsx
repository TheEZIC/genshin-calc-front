import {ITalent} from "./ITalent";
import {IBaseCharacter} from "./IBaseCharacter";
import {IBaseDatabaseItem} from "../Database/IBaseDatabaseItem";

export interface IMyCharacterStat {
  name: string;
  value: number;
}

export interface IMyCharacter extends IBaseCharacter, IBaseDatabaseItem {
  lvl: number;
  talents: ITalent[];
  stats: IMyCharacterStat[];
}
