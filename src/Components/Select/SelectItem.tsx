import React, {FC} from 'react';
import {useSelectContext} from "./SelectContext";
import styles from "./Select.module.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const SelectItem: FC<IProps> = (props) => {
  const {onItemClick, changeHeaderOnClick, changeHeader} = useSelectContext();

  function _onItemClick() {
    props.onClick?.();

    if (changeHeaderOnClick) {
      changeHeader(props.children);
    }

    onItemClick?.();
  }

  return (
    <div onClick={_onItemClick} className={styles.selectItem}>
      {props.children}
    </div>
  );
};

export default SelectItem;