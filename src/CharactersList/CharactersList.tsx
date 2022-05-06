import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import Xiangling from "genshin-calculator/dist/Lists/Charaters/Xiangling/Xiangling";
import {VisionType} from "genshin-calculator/dist/VisionType";
import Ayaka from "genshin-calculator/dist/Lists/Charaters/Ayaka/Ayaka";

const charactersList: IBaseCharacter[] = [
  {
    name: "Ayaka",
    fullName: "KamisatoAyaka",
    creator: Ayaka,
    visionType: VisionType.Cryo,
    displayName: "Аяка",
    rarity: 5,
  },
  {
    name: "Xiangling",
    fullName: "Xiangling",
    creator: Xiangling,
    visionType: VisionType.Pyro,
    displayName: "Сян Линь",
    rarity: 4,
  },
];

export {charactersList};