import {atom} from "recoil";
import {IRosterCharacterItem} from "../CharacterTypes/IRosterCharacterItem";

export const rosterAtom = atom<IRosterCharacterItem[]>({
  key: 'RosterAtom',
  dangerouslyAllowMutability: true,
  default: [],
});
