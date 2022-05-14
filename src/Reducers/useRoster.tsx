import { useRecoilState } from "recoil";
import {rosterAtom} from "../Atoms/RosterAtom";
import {IRosterCharacterItem} from "../CharacterTypes/IRosterCharacterItem";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {useCalc} from "./useCalc";
import CalcStores from "../CalcStores/CalcStores";

export function useRoster() {
  const calc = useCalc();
  const [roster, setRoster] = useRecoilState(rosterAtom);

  function addCharacter(baseCharacter: IBaseCharacter): void {
    const character = CalcStores.myCharacters.getByName(baseCharacter.name);

    if (!character) return;

    const rosterCharacter: IRosterCharacterItem = {
      ...baseCharacter,
      coreCharacter: character,
    }

    calc.roster.addCharacter(character);
    setRoster((current) => [...current, rosterCharacter]);
  }

  function removeCharacter(baseCharacter: IBaseCharacter): void {
    const rosterCharacter = roster.find(r => r.name === baseCharacter.name);

    if (!rosterCharacter) {
      return;
    }

    calc.roster.removeCharacter(rosterCharacter.coreCharacter);
    setRoster((current) =>
      current.filter(c => c.name !== rosterCharacter.name)
    );
  }

  return {
    roster,
    addCharacter,
    removeCharacter,
  }
}
