import {useRecoilState} from "recoil";
import {calcResultAtom} from "../Atoms/CalcResultAtom";
import {ICalcResult} from "genshin-calculator/dist/Roster/DamageCalculator";

export default function useCalcResult() {
  const [calcResult, _setCalcResult] = useRecoilState(calcResultAtom);

  function setCalcResult(result: ICalcResult) {
    _setCalcResult(result);
  }

  return {
    calcResult,
    setCalcResult,
  }
}