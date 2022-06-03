import {ITalent} from "./ITalent";
import {IBaseCharacterWithStats} from "./IBaseCharacterWithStats";

export interface IMyCharacter extends IBaseCharacterWithStats {
  lvl: number;
  talents: ITalent[];
}
