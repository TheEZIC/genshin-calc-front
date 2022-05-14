export default abstract class CalcStore<T> {
  private _list: T[] = [];

  public get list () {
    return this._list;
  }

  public add(item: T) {
    this._list.push(item);
  }

  public remove(item: T) {
    const index = this._list.indexOf(item);

    if (index !== -1) {
      this._list.splice(index);
    }
  }
}