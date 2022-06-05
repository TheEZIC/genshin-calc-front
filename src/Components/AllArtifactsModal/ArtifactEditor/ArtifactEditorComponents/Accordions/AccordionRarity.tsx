import React from 'react';
import ArtifactAccordionSetRarity from "../ArtifactAccordionSetRarity";
import Select from "../../../../Select/Select";
import styles from "./../../../AllArtifactsModal.module.scss";
import {useArtifactEditorContext} from "../ArtifactEditorContext";


const AccordionRarity = () => {
  const {setMaxSubStats} = useArtifactEditorContext();

  return (
    <Select
      header={"Редкость"}
      changeHeaderOnClick={true}
      setGrow={0}
      className={styles.accordionFixedWidth}
    >
      <Select.Item onClick={() => setMaxSubStats(4)}>
        <ArtifactAccordionSetRarity count={5} />
      </Select.Item>
      <Select.Item onClick={() => setMaxSubStats(4)}>
        <ArtifactAccordionSetRarity count={4} />
      </Select.Item>
      <Select.Item onClick={() => setMaxSubStats(3)}>
        <ArtifactAccordionSetRarity count={3} />
      </Select.Item>
    </Select>
  );
};

export default AccordionRarity;