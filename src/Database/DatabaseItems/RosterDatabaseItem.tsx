import {MyCharacterDatabaseItem} from "./MyCharacterDatabaseItem";
import {IMyCharacter} from "../../CharacterTypes/IMyCharacter";
import MyCharacterAdapter from "../../Adapters/MyCharacterAdapter";
import CalculatorSingleton from "../../CalculatorSingleton";
import DatabaseItem from "../DatabaseItem";

export default class RosterDatabaseItem extends DatabaseItem<string[], IMyCharacter[]>{
  public override key: string = "Roster";

  protected myCharacterAdapter: MyCharacterAdapter = new MyCharacterAdapter();

  public async getDefaults(): Promise<IMyCharacter[]> {
    const items = await this.getItems();
    const myCharacters = await this.database.myCharacters.getItems();

    if (!items || !myCharacters) return [];

    const rosterCharacters: IMyCharacter[] = [];

    for (let character of myCharacters) {
      if (items.includes(character.id)) {
        const coreCharacter = this.myCharacterAdapter.toCore(character);
        CalculatorSingleton.instance.roster.addCharacter(coreCharacter);
        rosterCharacters.push(character);
      }
    }

    return rosterCharacters;
  }

  async add(myCharacter: IMyCharacter): Promise<void> {
    const items = await this.getItems() ?? [];
    const exists = items.includes(myCharacter.id);

    if (!exists) {
      await this.setItems([...items, myCharacter.id]);
    }
  }

  async remove(myCharacter: IMyCharacter): Promise<void> {
    let items = await this.getItems();

    if (!items) {
      return;
    }

    items = items.filter(c => c !== myCharacter.id);
    await this.setItems(items);
  }
}