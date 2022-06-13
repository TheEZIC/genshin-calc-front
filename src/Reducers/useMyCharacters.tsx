import {useRecoilState} from "recoil";
import {myCharactersAtom} from "../Atoms/MyCharactersAtom";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {useRoster} from "./useRoster";
import CalcStores from "../CalcStores/CalcStores";
import {IMyCharacter} from "../CharacterTypes/IMyCharacter";
import {BaseCharacterAdapter} from "../Adapters/BaseCharacterAdapter";
import MyCharacterAdapter from "../Adapters/MyCharacterAdapter";
import {Db} from "../Database/Database";
import CalculatorSingleton from "../CalculatorSingleton";
import {calc} from "@chakra-ui/react";

export function useMyCharacters() {
  const baseCharacterAdapter = new BaseCharacterAdapter();
  const myCharacterAdapter = new MyCharacterAdapter();

  const [myCharacters, setMyCharacters] = useRecoilState(myCharactersAtom);
  const {removeCharacter} = useRoster();

  function findMyCharacterByName(name: string) {
    return myCharacters.find(c => c.name == name);
  }

  function addMyCharacter(baseCharacter: IBaseCharacter) {
    const character = baseCharacterAdapter.toCore(baseCharacter);
    const myCharacter = myCharacterAdapter.toFrontend(character);

    CalcStores.myCharacters.add(character);
    Db.myCharacters.add(myCharacter);

    setMyCharacters((current) => [
      ...current,
      myCharacter
    ]);
  }

  function removeMyCharacter(baseCharacter: IBaseCharacter) {
    const character = baseCharacterAdapter.toCore(baseCharacter);
    const myCharacter = myCharacters.find(c => c.name === baseCharacter.name);

    if (!myCharacter) return;

    CalcStores.myCharacters.remove(character);
    Db.myCharacters.remove(myCharacter);
    removeCharacter(myCharacter);

    setMyCharacters((current) => current.filter(c => {
      return c.name !== baseCharacter.name
    }));
  }

  function changeMyCharacterLvl(myCharacter: IMyCharacter, lvl: number) {
    const character = findMyCharacterByName(myCharacter.name);

    if (!character) return;

    Db.myCharacters.changeLvl(myCharacter, lvl);
    const calcCharacter = CalculatorSingleton.instance.roster.characters.find(c => c.title === myCharacter.name);

    if (calcCharacter) {
      calcCharacter.baseStats.applyLvl(lvl);
    }

    setMyCharacters((current) => {
      current = current.filter(c => c.name !== myCharacter.name);
      character.lvl = lvl;

      return [
        ...current,
        character,
      ];
    });
  }

  return {
    myCharacters,
    changeMyCharacterLvl,
    findMyCharacterByName,
    addMyCharacter,
    removeMyCharacter,
  }
}
