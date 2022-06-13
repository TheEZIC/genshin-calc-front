import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {VisionType} from "genshin-calculator/dist/VisionType";

const charactersList: IBaseCharacter[] = [
  {
    name: "Ayaka",
    fullName: "KamisatoAyaka",
    visionType: VisionType.Cryo,
    displayName: "Аяка",
    rarity: 5,
  },
  {
    name: "Xiangling",
    fullName: "Xiangling",
    visionType: VisionType.Pyro,
    displayName: "Сян Линь",
    rarity: 4,
  },
];

export {charactersList};