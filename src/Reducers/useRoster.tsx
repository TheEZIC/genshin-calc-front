import {useCalc} from "./useCalc";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import {genshinCalcAtom} from "../Atoms/GenshinCalcAtom";
import { useRecoilState } from "recoil";
import {rosterAtom} from "../Atoms/RosterAtom";

export function useRoster() {
  const {calc} = useCalc();
  const [roster, setRoster] = useRecoilState(rosterAtom);

  function addCharacter(character: Character) {
  }

  function removeCharacter() {

  }

  function getAll() {

  }

  function getActive() {

  }

  return {
    addCharacter,
    removeCharacter,
    getAll,
    getActive,
  }
}
