import {Constructor} from "genshin-calculator/dist/Helpers/Constructor";
import Character from "genshin-calculator/dist/Entities/Characters/Character";

export interface IBaseCharacter {
  name: string;
  displayName: string;
  creator: Constructor<Character>;
  imageName: string;
}