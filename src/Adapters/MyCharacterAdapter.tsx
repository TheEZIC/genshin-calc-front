import Adapter from "./Adapter";
import {IMyCharacter, IMyCharacterStat} from "../CharacterTypes/IMyCharacter";
import Character from "genshin-calculator/dist/Entities/Characters/Character";
import CharactersFactory from "genshin-calculator/dist/Factories/CharactersFactory";
import {charactersList} from "../CharactersList/CharactersList";
import Stat from "genshin-calculator/dist/Entities/Characters/CalculatorStats/Types/Stat";
import {IBaseCharacter} from "../CharacterTypes/IBaseCharacter";
import {getRecoil, setRecoil} from "recoil-nexus";
import {myCharactersAtom} from "../Atoms/MyCharactersAtom";

export default class MyCharacterAdapter extends Adapter<IMyCharacter, Character>{
  private charactersFactory = CharactersFactory.instance;

  public toCore(frontendData: IMyCharacter): Character {
    const factoryItem = this.charactersFactory.getByName(frontendData.name)!;
    const character = new factoryItem.creator();

    character.baseStats.applyLvl(frontendData.lvl);

    return character;
  }

  public toFrontend(coreData: Character): IMyCharacter {
    const baseCharacter = charactersList.find(c => c.name === coreData.title)!;
    const stats = MyCharacterAdapter.subscribeStats(coreData, baseCharacter);

    return {
      ...baseCharacter,
      id: crypto.randomUUID(),
      lvl: coreData.lvl,
      talents: [],
      stats,
    }
  }

  public static subscribeStats(coreCharacter: Character, baseCharacter: IBaseCharacter): IMyCharacterStat[] {
    const stats: IMyCharacterStat[] = [];

    for (let coreStat of coreCharacter.calculatorStats.list) {
      const stat = this.subscribeStat(coreStat, baseCharacter);
      stats.push(stat);
    }

    return stats;
  }

  private static subscribeStat(coreStat: Stat, baseCharacter: IBaseCharacter): IMyCharacterStat {
    let stat = {
      name: coreStat.title,
      value: coreStat.calc(),
    }

    coreStat.onChange.subscribe((value) => {
      const myCharactersRecoil = getRecoil(myCharactersAtom);
      const myCharacter = myCharactersRecoil.find(c => c.name === baseCharacter.name);

      if (!myCharacter) return;

      const current = myCharactersRecoil.filter(c => c.name !== baseCharacter.name);
      myCharacter.stats = myCharacter.stats.filter(s => s.name !== stat.name);
      myCharacter.stats.push({
        name: stat.name,
        value,
      });

      setRecoil(myCharactersAtom, [
        ...current,
        myCharacter,
      ]);
    });

    return stat;
  }
}