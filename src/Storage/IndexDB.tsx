import Storage from "./Storage";
import * as localforage from "localforage";

export default class IndexDBStorage extends Storage {
  async getItem<T = any>(key: string): Promise<T | null | undefined> {
    return localforage.getItem<T>(key);
  }

  async setItem<T = any>(key: string, value: T): Promise<T> {
    return localforage.setItem<T>(key, value);
  }
}