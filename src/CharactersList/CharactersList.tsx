import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import Xiangling from "genshin-calculator/dist/Lists/Charaters/Xiangling/Xiangling";
import {VisionType} from "genshin-calculator/dist/VisionType";
import Ayaka from "genshin-calculator/dist/Lists/Charaters/Ayaka/Ayaka";

const charactersList: IBaseCharacter[] = [
  {
    name: "Ayaka",
    creator: Ayaka,
    visionType: VisionType.Cryo,
    displayName: "Аяка",
    imageName: "KamisatoAyaka.png",
  },
  {
    name: "Xiangling",
    creator: Xiangling,
    visionType: VisionType.Pyro,
    displayName: "Сян Линь",
    imageName: "Xiangling.png",
  },
];

export {charactersList};