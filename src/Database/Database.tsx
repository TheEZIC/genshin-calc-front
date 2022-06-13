import Storage from "../Storage/Storage";
import IndexDBStorage from "../Storage/IndexDB";
import {MyCharacterDatabaseItem} from "./DatabaseItems/MyCharacterDatabaseItem";
import RosterDatabaseItem from "./DatabaseItems/RosterDatabaseItem";
import RotationSkillsDatabaseItem from "./DatabaseItems/RotationSkillsDatabaseItem";

export class Database {
  public storage: Storage = new IndexDBStorage();

  public myCharacters: MyCharacterDatabaseItem = new MyCharacterDatabaseItem(this);
  public roster: RosterDatabaseItem = new RosterDatabaseItem(this);
  public rotationSkills: RotationSkillsDatabaseItem = new RotationSkillsDatabaseItem(this);
}

export const Db = new Database();