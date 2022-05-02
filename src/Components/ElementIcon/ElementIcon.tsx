import React, {FC} from 'react';
import VisionIconsList from "../CharacterCard/VisionIconsList";
import {VisionType} from "genshin-calculator/dist/VisionType";
import styles from "./ElementalIcon.module.scss";

interface IProps {
  visionType: VisionType;
}

const ElementIcon: FC<IProps> = (props) => {
  const icons = new VisionIconsList();
  const item = icons.find(props.visionType);

  return (
    <div
      className={styles.elementIconContainer}
      style={{backgroundColor: item.color}}
    >
      {item.icon}
    </div>
  );
};

export default ElementIcon;