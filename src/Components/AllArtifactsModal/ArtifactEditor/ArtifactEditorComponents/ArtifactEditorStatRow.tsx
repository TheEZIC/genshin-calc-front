import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import ArtifactEditorStatInput from "./ArtifactEditorStatInput";
import AccordionStats from "./Accordions/AccordionStats";
import {FaPencilAlt, FaTrashAlt} from "react-icons/all";
import {Box} from "@chakra-ui/react";
import ArtifactEditor from "../ArtifactEditor";

interface IProps {
}

const ArtifactEditorStatRow:FC<IProps> = (props) => {


  // function removeSubStatRow() {
  //   console.log("addSubStatRow", subStatsCount < 0, subStatsCount)
  //   if (subStatsCount < 0) {
  //     setSubStatsCount((current) => current.filter(c => {
  //       return
  //     }));
  //   }
  // }

  return (
    <div className={styles.artifactsEditorModal}>
      <AccordionStats />
      <ArtifactEditorStatInput />
      <FaTrashAlt
        className={styles.icon}
        // onClick={() => removeSubStatRow}
      />
    </div>
  );
};

export default ArtifactEditorStatRow;