import {createContext} from "../../ReactUtils/context";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";

const [CharacterCardContext, useCharacterCardContext] = createContext<IBaseCharacter>({
  name: "CharacterCardContext"
});

export {CharacterCardContext, useCharacterCardContext};