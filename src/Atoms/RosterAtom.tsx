import {atom} from "recoil";
import Character from "genshin-calculator/dist/Entities/Characters/Character";

const rosterAtom = atom<Character[]>({
  key: 'RosterAtom',
  default: [],
});

export {rosterAtom};
