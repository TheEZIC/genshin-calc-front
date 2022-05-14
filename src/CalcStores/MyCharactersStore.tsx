import CalcStore from "./CalcStore";
import Character from "genshin-calculator/dist/Entities/Characters/Character";

export default class MyCharactersStore extends CalcStore<Character> {
  public getByName(name: string) {
    return this.list.find(c => c.title === name);
  }
}