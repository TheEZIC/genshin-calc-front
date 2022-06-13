import {atom} from "recoil";
import {IRotationSkill} from "../SkillTypes/IRotationSkill";
import {Db} from "../Database/Database";

export const rotationSkillsAtom = atom<IRotationSkill[]>({
  key: 'RotationSkillsAtom',
  dangerouslyAllowMutability: true,
  default: Db.rotationSkills.getDefaults(),
});
