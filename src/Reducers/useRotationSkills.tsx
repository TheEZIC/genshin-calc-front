import {useRecoilState} from "recoil";
import {rotationSkillsAtom} from "../Atoms/RotationSkillsAtom";
import Skill from "genshin-calculator/dist/Skills/Skill";

export default function useRotationSkills() {
  const [rotationSkills, setRotationSkills] = useRecoilState(rotationSkillsAtom);

  function addRotationSkill(skill: Skill) {
    setRotationSkills(current => [...current, skill]);
  }

  function removeRotationSkill(skill: Skill) {
    setRotationSkills((current) => current.filter(c => {
      return c.name !== skill.name
    }));
  }

  function clearRotationSkills() {
    setRotationSkills([]);
  }

  return {
    rotationSkills,
    addRotationSkill,
    removeRotationSkill,
    clearRotationSkills,
  }
}