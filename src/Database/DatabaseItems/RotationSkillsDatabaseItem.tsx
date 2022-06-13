import DatabaseItem from "../DatabaseItem";
import {IRotationSkill} from "../../SkillTypes/IRotationSkill";

export default class RotationSkillsDatabaseItem extends DatabaseItem<IRotationSkill[]> {
  public key: string = "RotationSkills";

  public async getDefaults(): Promise<IRotationSkill[]> {
    const items = await this.getItems();

    if (!items) return [];

    // for (let item of items) {
    //   const coreSkill = SkillsFactory.instance.list.find(s => s.item.title === item.title);
    // }

    return items;
  }

  public async add(rotationSkill: IRotationSkill): Promise<void> {
    const items = await this.getItems() ?? [];
    const existById = items.find(s => s.id === rotationSkill.id);

    if (!existById) {
      await this.setItems([...items, rotationSkill]);
    }
  }

  public async remove(rotationSkill: IRotationSkill): Promise<void> {
    let items = await this.getItems();

    if (!items) {
      return;
    }

    items = items.filter(c => c.id !== rotationSkill.id);
    await this.setItems(items);
  }

  public async clear(): Promise<void> {
    await this.setItems([]);
  }
}