import { useRecoilState } from "recoil";
import {rosterAtom} from "../Atoms/RosterAtom";
import {useCalc} from "./useCalc";
import MyCharacterAdapter from "../Adapters/MyCharacterAdapter";
import {Db} from "../Database/Database";
import {IMyCharacter} from "../CharacterTypes/IMyCharacter";

export function useRoster() {
  const myCharacterAdapter = new MyCharacterAdapter();

  const calc = useCalc();
  const [roster, setRoster] = useRecoilState(rosterAtom);

  function addCharacter(myCharacter: IMyCharacter): void {
    const character = myCharacterAdapter.toCore(myCharacter);

    console.log(character, myCharacter, "add character to roster")

    if (!character) return;

    calc.roster.addCharacter(character);
    Db.roster.add(myCharacter);

    setRoster((current) => [...current, myCharacter]);
  }

  function removeCharacter(myCharacter: IMyCharacter): void {
    const rosterCharacter = roster.find(r => r.name === myCharacter.name);

    if (!rosterCharacter) {
      return;
    }

    const character = myCharacterAdapter.toCore(rosterCharacter);

    calc.roster.removeCharacter(character);
    Db.roster.remove(rosterCharacter);

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
