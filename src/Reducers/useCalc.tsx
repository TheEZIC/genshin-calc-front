import {useRecoilState} from "recoil";
import {genshinCalcAtom} from "../Atoms/GenshinCalcAtom";

export function useCalc() {
  const [calc] = useRecoilState(genshinCalcAtom);
  return {calc};
}
