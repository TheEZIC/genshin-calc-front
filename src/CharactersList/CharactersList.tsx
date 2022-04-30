import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import Ayaka from "genshin-calculator/dist/Lists/Charaters/Ayaka/Ayaka";
import Xiangling from "genshin-calculator/dist/Lists/Charaters/Xiangling/Xiangling";

const charactersList: IBaseCharacter[] = [
  {
    name: "Ayaka",
    displayName: "Аяка",
    creator: Ayaka,
    imageName: "KamisatoAyaka.png",
  },
  {
    name: "Xiangling",
    displayName: "Сян Линь",
    creator: Xiangling,
    imageName: "Xiangling.png",
  }
];

export {charactersList};