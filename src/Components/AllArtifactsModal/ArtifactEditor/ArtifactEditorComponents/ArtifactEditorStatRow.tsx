import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import ArtifactEditorStatInput from "./ArtifactEditorStatInput";
import AccordionStats from "./Accordions/AccordionStats";
import {FaPencilAlt, FaTrashAlt} from "react-icons/all";
import {Box} from "@chakra-ui/react";

interface IProps {
}

const ArtifactEditorStatRow:FC<IProps> = (props) => {
  return (
    <div className={styles.artifactsEditorModal}>
      <AccordionStats />
      <ArtifactEditorStatInput />
      <FaTrashAlt
        className={styles.icon}
        // onClick={() => removeMyCharacter(c)}
      />
    </div>
  );
};

export default ArtifactEditorStatRow;