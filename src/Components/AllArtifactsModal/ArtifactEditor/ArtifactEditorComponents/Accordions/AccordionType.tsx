import React from 'react';
import ArtifactEditorAccordionType from "../ArtifactEditorAccordionType";
import {ArtifactType} from "../ArtifactTypeEnum";
import Select from "../../../../Select/Select";
import {inspect} from "util";
import styles from "./../../../AllArtifactsModal.module.scss"

const AccordionType = () => {
  return (
    <Select
      header={"Выберите тип артифакта"}
      changeHeaderOnClick={true}
      setGrow={1}
    >
      <Select.Item>
        <ArtifactEditorAccordionType
          icon={ArtifactType.Flower}
          name="Цветок жизни"
        />
      </Select.Item>
      <Select.Item>
        <ArtifactEditorAccordionType
          icon={ArtifactType.Plume}
          name="Перо смерти"
        />
      </Select.Item>
      <Select.Item>
        <ArtifactEditorAccordionType
          icon={ArtifactType.Sands}
          name="Пески времени"
        />
      </Select.Item>
      <Select.Item>
        <ArtifactEditorAccordionType
          icon={ArtifactType.Goblet}
          name="Кубок пространства"
        />
      </Select.Item>
      <Select.Item>
        <ArtifactEditorAccordionType
          icon={ArtifactType.Circlet}
          name="Корона разума"
        />
      </Select.Item>
    </Select>
  );
};

export default AccordionType;