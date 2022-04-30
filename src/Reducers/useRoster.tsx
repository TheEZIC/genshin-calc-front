import {useCalc} from "./useCalc";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import { useRecoilState } from "recoil";
import {rosterAtom} from "../Atoms/RosterAtom";

export function useRoster() {
  const {calc} = useCalc();
  const [roster, setRoster] = useRecoilState(rosterAtom);

  function addCharacter(character: Character): void {
    calc.roster.addCharacter(character);
    setRoster([...roster, character]);
  }

  function removeCharacter(character: Character): void {
    calc.roster.removeCharacter(character);
    setRoster(roster.filter(c => c.name !== character.name));
  }

  return {
    roster,
    addCharacter,
    removeCharacter,
  }
}
