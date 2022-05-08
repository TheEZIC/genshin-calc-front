import React, {useEffect, useState} from 'react';
import {Accordion, Box} from "@chakra-ui/react";
import AccordionCharacter from "./AccordionCharacter";
import styles from "./SkillTree.module.scss"
import {useRoster} from "../../../Reducers/useRoster";
import {useCalc} from "../../../Reducers/useCalc";
import {ISkillsItem} from "genshin-calculator/dist/Roster/Roster";

const SkillTree = () => {
  const [skills, setSkills] = useState<ISkillsItem[]>([]);
  const {roster} = useRoster();
  const calc = useCalc();

  useEffect(() => {
    const rosterSkills = calc.roster.charactersSkills;
    console.log(rosterSkills, "rosterSkills")
    setSkills(rosterSkills);
  }, [roster]);

  function renderSkillTree() {
    const items = new Map<string, ISkillsItem[]>();
    const nodes: React.ReactNode[] = [];

    for (let skillItem of skills) {
      const key = skillItem.character.title;
      let item = items.get(key);

      if (item) {
        item.push(skillItem);
      } else {
        item = [skillItem];
      }

      items.set(key, item);
    }

    for (let [key, value] of items.entries()) {
      const name = value[0].character.title;
      const skills = value.map(v => v.skill);
      const baseCharacter = roster.find(r => r.name === name);

      if (!baseCharacter) {
        continue;
      }

      nodes.push(<AccordionCharacter baseCharacter={baseCharacter} skills={skills}/>);
    }

    return nodes;
  }

  return (
    <Box className={styles.container} >
      <Accordion allowMultiple className={styles.accordion}>
        {renderSkillTree()}
      </Accordion>
    </Box>
  );
};

export default SkillTree;