import {SkillType} from "genshin-calculator/dist/Skills/SkillType";

export interface ITalent {
  SkillTypes: SkillType[];
  lvl: number;
}