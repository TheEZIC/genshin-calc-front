import {atom} from "recoil";
import {IMyCharacter} from "../CharacterTypes/IMyCharacter";

export const myCharactersAtom = atom<IMyCharacter[]>({
  key: 'MyCharactersAtom',
  default: [],
});
