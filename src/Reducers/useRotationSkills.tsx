import {useRecoilState} from "recoil";
import {rotationSkillsAtom} from "../Atoms/RotationSkillsAtom";
import Skill from "genshin-calculator/dist/Skills/Skill";
import {IRotationSkill} from "../SkillTypes/IRotationSkill";
import {Db} from "../Database/Database";

export default function useRotationSkills() {
  const [rotationSkills, setRotationSkills] = useRecoilState(rotationSkillsAtom);

  function addRotationSkill(skill: Skill) {
    const id = crypto.randomUUID();
    const rotationSkill = {
      id,
      title: skill.title,
    };

    Db.rotationSkills.add(rotationSkill);
    setRotationSkills(current => [...current, rotationSkill]);
  }

  function removeRotationSkill(skillItem: IRotationSkill) {
    Db.rotationSkills.remove(skillItem);
    setRotationSkills((current) => current.filter(c => {
      return c.id !== skillItem.id
    }));
  }

  function clearRotationSkills() {
    Db.rotationSkills.clear();
    setRotationSkills([]);
  }

  return {
    rotationSkills,
    addRotationSkill,
    removeRotationSkill,
    clearRotationSkills,
  }
}