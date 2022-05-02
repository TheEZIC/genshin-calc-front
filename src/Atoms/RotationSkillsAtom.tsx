import {atom} from "recoil";
import Skill from "genshin-calculator/dist/Skills/Skill";

export const rotationSkillsAtom = atom<Skill[]>({
  key: 'RotationSkillsAtom',
  dangerouslyAllowMutability: true,
  default: [],
});
