import DatabaseItem from "../DatabaseItem";
import {IMyCharacter} from "../../CharacterTypes/IMyCharacter";
import MyCharacterAdapter from "../../Adapters/MyCharacterAdapter";
import CalcStores from "../../CalcStores/CalcStores";

export class MyCharacterDatabaseItem extends DatabaseItem<IMyCharacter[]> {
  public key: string = "MyCharacters";

  protected myCharacterAdapter: MyCharacterAdapter = new MyCharacterAdapter();

  public async getDefaults(): Promise<IMyCharacter[]> {
    const items = await this.getItems();

    if (!items) return [];

    for (let item of items) {
      const coreCharacter = this.myCharacterAdapter.toCore(item);
      MyCharacterAdapter.subscribeStats(coreCharacter, item);
      CalcStores.myCharacters.add(coreCharacter);
    }

    return items;
  }

  async add(myCharacter: IMyCharacter): Promise<void> {
    const items = await this.getItems() ?? [];

    const existByName = items.find(c => c.name === myCharacter.name);
    const existById = items.find(c => c.id === myCharacter.id);

    if (!existById && !existByName) {
      await this.setItems([...items, myCharacter]);
    }
  }

  async remove(myCharacter: IMyCharacter): Promise<void> {
    let items = await this.getItems();

    if (!items) {
      return;
    }

    items = items.filter(c => c.id !== myCharacter.id);
    await this.setItems(items);
  }

  async changeLvl(myCharacter: IMyCharacter, lvl: number): Promise<void> {
    let items = await this.getItems();

    if (!items) {
      return;
    }

    const character = items.find(c => c.name === myCharacter.name);

    if (!character) {
      return;
    }

    character.lvl = lvl;
    items = items.filter(c => c.name !== myCharacter.name);

    await this.setItems([...items, myCharacter]);
  }
}