import {atom} from "recoil";
import {GenshinCalculator} from "genshin-calculator";

const genshinCalcAtom = atom<GenshinCalculator>({
  key: 'GenshinCalcAtom',
  default: new GenshinCalculator(),
});

export {genshinCalcAtom};
