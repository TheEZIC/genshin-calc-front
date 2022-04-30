import {ITalent} from "./ITalent";
import {IBaseCharacter} from "./IBaseCharacter";

export interface IMyCharacter extends IBaseCharacter {
  lvl: number;
  talents: ITalent[];
}