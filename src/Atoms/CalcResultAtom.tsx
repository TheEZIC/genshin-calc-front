import {atom} from "recoil";
import {ICalcResult} from "genshin-calculator/dist/Roster/DamageCalculator";

export const calcResultAtom = atom<ICalcResult | null>({
  key: 'CalcResultAtom',
  default: null,
});
