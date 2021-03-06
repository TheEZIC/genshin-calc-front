import {VisionType} from "genshin-calculator/dist/VisionType";
import {Constructor} from "genshin-calculator/dist/Helpers/Constructor";
import Character from "genshin-calculator/dist/Entities/Characters/Character";

export interface IBaseCharacter {
  name: string;
  fullName: string;
  visionType: VisionType;
  displayName: string;
  rarity: number;
}