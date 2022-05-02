import {IBaseCharacter} from "./IBaseCharacter";
import Character from "genshin-calculator/dist/Entities/Characters/Character";

export interface IRosterCharacterItem extends IBaseCharacter {
  coreCharacter: Character;
}