import {useRecoilState} from "recoil";
import {myCharactersAtom} from "../Atoms/MyCharactersAtom";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";

export function useMyCharacters() {
  const [myCharacters, setMyCharacters] = useRecoilState(myCharactersAtom);

  function addMyCharacter(baseCharacter: IBaseCharacter) {
    setMyCharacters([...myCharacters, {
      ...baseCharacter,
      lvl: 1,
      talents: [],
    }]);
  }

  function removeMyCharacter(baseCharacter: IBaseCharacter) {
    setMyCharacters(myCharacters.filter(c => c.name !== baseCharacter.name));
  }

  return {
    myCharacters,
    addMyCharacter,
    removeMyCharacter,
  }
}