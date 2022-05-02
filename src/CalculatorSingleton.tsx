import {GenshinCalculator} from "genshin-calculator";
import Enemy from "genshin-calculator/dist/Entities/Enemies/Enemy";
//import Enemy from "genshin-calculator/dist/Entities/Enemies/Enemy";

export default class CalculatorSingleton {
  private static _instance: GenshinCalculator;

  public static get instance() {
    if (!this._instance) {
      const calc = new GenshinCalculator();
      calc.roster.addEnemy(new Enemy());
      this._instance = calc;
    }

    return this._instance;
  }
}