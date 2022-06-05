import React from 'react';
import ArtifactEditorAccordionSet from "../ArtifactEditorAccordionSet";
import ArtifactSet from "../ArtifactSet";
import Select from "../../../../Select/Select";

const AccordionSet = () => {
  return (
    <Select
      header={<ArtifactEditorAccordionSet />}
      changeHeaderOnClick={true}
      setGrow={1}
    >
      <Select.Item>
        <ArtifactSet icon="Adventurer" name="Искатель приключений" />
      </Select.Item>
      <Select.Item>
        <ArtifactSet icon="ArchaicPetra" name="Архаичный камень" />
      </Select.Item>
      <Select.Item>
        <ArtifactSet icon="Berserker" name="Берсерк" />
      </Select.Item>
      <Select.Item>
        <ArtifactSet icon="BlizzardStrayer" name="Заблудший в метели" />
      </Select.Item>
    </Select>
  );
};

export default AccordionSet;