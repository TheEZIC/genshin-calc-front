import {useRecoilState} from "recoil";
import {myCharactersAtom} from "../Atoms/MyCharactersAtom";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {useRoster} from "./useRoster";

export function useMyCharacters() {
  const [myCharacters, setMyCharacters] = useRecoilState(myCharactersAtom);
  const {removeCharacter} = useRoster();

  function addMyCharacter(baseCharacter: IBaseCharacter) {
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