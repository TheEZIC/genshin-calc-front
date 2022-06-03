import {useRecoilState} from "recoil";
import {myCharactersAtom} from "../Atoms/MyCharactersAtom";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {useRoster} from "./useRoster";
import CalcStores from "../CalcStores/CalcStores";
import {IBaseCharacterWithStats} from "../CharacterTypes/IBaseCharacterWithStats";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import Stat from "genshin-calculator/dist/Entities/Characters/CalculatorStats/Types/Stat";

export function useMyCharacters() {
  const [myCharacters, setMyCharacters] = useRecoilState(myCharactersAtom);
  const {removeCharacter} = useRoster();

  function subscribeMyCharacterStat(stat: Stat, statKey: string, character: IBaseCharacterWithStats) {
    const myCharacter = findMyCharacterByName(character.name);

    if (myCharacter) {
      stat.onChange.subscribe(() => {
        setMyCharacters((current) => {
          current = current.filter(c => c.name !== myCharacter.name);
          //@ts-ignore
          myCharacter[statKey] = stat.calc();

          return [
            ...current,
            myCharacter,
          ];
        })
      });
    }
  }

  function subscribeMyCharacterStats(
    baseCharacter: IBaseCharacter,
    character: Character
  ): IBaseCharacterWithStats {
    const baseCharacterWithStats: IBaseCharacterWithStats = {
      ...baseCharacter,
      atk: character.calculatorStats.HP.calc()
    }

    return baseCharacterWithStats;
  }

  function findMyCharacterByName(name: string) {
    return myCharacters.find(c => c.name == name);
  }

  function addMyCharacter(baseCharacter: IBaseCharacter) {
    const character = new baseCharacter.creator();
    const characterWithStats = subscribeMyCharacterStats(baseCharacter, character);

    CalcStores.myCharacters.add(character);
    setMyCharacters((current) => [
      ...current,
      {
        ...characterWithStats,
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
