import {Database} from "./Database";

export type DatabaseItemDefaults<T> = T | null | undefined;

export default abstract class DatabaseItem<T, B = T> {
  constructor(
    protected database: Database,
  ) {
  }

  public abstract key: string;

  public abstract getDefaults(): B | Promise<B>;

  protected get hash(): string {
    return crypto.randomUUID();
  }
  
  public getItems(): Promise<T | null | undefined> {
    return this.database.storage.getItem<T>(this.key);
  }

  public setItems(value: T): Promise<T | null | undefined> {
    return this.database.storage.setItem(this.key, value);
  }
}