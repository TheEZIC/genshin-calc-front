import Adapter from "./Adapter";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import CharactersFactory from "genshin-calculator/dist/Factories/CharactersFactory";
import {charactersList} from "../CharactersList/CharactersList";

export class BaseCharacterAdapter extends Adapter<IBaseCharacter, Character> {
  private charactersFactory = CharactersFactory.instance;

  public toCore(frontendData: IBaseCharacter): Character {
    const item = this.charactersFactory.getByName(frontendData.name)!;
    const character = new item.creator();
    //character.baseStats.applyLvl(frontendData);
    return character;
  }

  public toFrontend(coreData: Character): IBaseCharacter {
    return charactersList.find(c => c.name === coreData.title)!;
  }
}