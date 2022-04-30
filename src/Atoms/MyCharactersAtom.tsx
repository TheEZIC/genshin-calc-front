import {atom} from "recoil";
import {IMyCharacter} from "../CharacterTypes/IMyCharacter";

const myCharactersAtom = atom<IMyCharacter[]>({
  key: 'MyCharactersAtom',
  default: [],
});

export {myCharactersAtom};
