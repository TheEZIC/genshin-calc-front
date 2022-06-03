import {useRecoilState} from "recoil";
import {myCharactersAtom} from "../Atoms/MyCharactersAtom";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {useRoster} from "./useRoster";
import CalcStores from "../CalcStores/CalcStores";
import {IMyCharacterStat} from "../CharacterTypes/IMyCharacter";

export function useMyCharacters() {
  const [myCharacters, setMyCharacters] = useRecoilState(myCharactersAtom);
  const {removeCharacter} = useRoster();

  function findMyCharacterByName(name: string) {
    return myCharacters.find(c => c.name == name);
  }

  function addMyCharacter(baseCharacter: IBaseCharacter) {
    const character = new baseCharacter.creator();
    const stats: IMyCharacterStat[] = [];

    for (let coreStat of character.calculatorStats.list) {
      let stat = {
        name: coreStat.title,
        value: coreStat.calc(),
      }

      stats.push(stat);
    }

    CalcStores.myCharacters.add(character);
    setMyCharacters((current) => [
      ...current,
      {
        ...baseCharacter,
        lvl: 1,
        talents: [],
      }
    ]);
  }

  function removeMyCharacter(baseCharacter: IBaseCharacter) {
    const character = new baseCharacter.creator();

    CalcStores.myCharacters.remove(character);
    removeCharacter(baseCharacter);
    setMyCharacters((current) => current.filter(c => {
      return c.name !== baseCharacter.name
    }));
  }

  return {
    myCharacters,
    addMyCharacter,
    removeMyCharacter,
  }
}
