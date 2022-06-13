export default abstract class Storage {
  public abstract getItem<T = any>(key: string): Promise<T | null | undefined>;
  public abstract setItem<T = any>(key: string, value: T): Promise<T>
}