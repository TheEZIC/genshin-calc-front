import React, {FC} from 'react';
import styles from "../../AllArtifactsModal.module.scss";
import StarIcon from "../../../Icons/StatIcons/StarIcon";

interface IProps {
  count: number;
}

const ArtifactAccordionSetRarity: FC<IProps> = (props) => {
  return (
    <div className={styles.artifactSetContainer}>
      <div className={styles.iconRarityStat}>
        <div className={styles.iconStat}>
          {new Array(props.count).fill(1, 0, props.count).map(() => (
            <StarIcon />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtifactAccordionSetRarity;