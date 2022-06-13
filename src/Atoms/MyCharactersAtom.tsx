import {atom} from "recoil";
import {IMyCharacter} from "../CharacterTypes/IMyCharacter";
import {Db} from "../Database/Database";

export const myCharactersAtom = atom<IMyCharacter[]>({
  key: 'MyCharactersAtom',
  dangerouslyAllowMutability: true,
  default: Db.myCharacters.getDefaults(),
});
