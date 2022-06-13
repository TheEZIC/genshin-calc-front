import {atom} from "recoil";
import {IMyCharacter} from "../CharacterTypes/IMyCharacter";
import {Db} from "../Database/Database";

export const rosterAtom = atom<IMyCharacter[]>({
  key: 'RosterAtom',
  dangerouslyAllowMutability: true,
  default: Db.roster.getDefaults(),
});
