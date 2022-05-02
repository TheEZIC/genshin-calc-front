import CalculatorSingleton from "../CalculatorSingleton";

export function useCalc() {
  const calc = CalculatorSingleton.instance;
  return calc;
}