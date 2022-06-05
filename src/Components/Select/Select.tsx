import React, {FC} from 'react';
import styles from './Select.module.scss';
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel} from "@chakra-ui/react";
import {SelectContext, useSelectContext} from './SelectContext';
import SelectItem from "./SelectItem";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  header : React.ReactNode;
  setGrow: number;
  onItemClick?: () => void;
  changeHeaderOnClick?: boolean;
}

interface IState {
  header: React.ReactNode;
}

const SelectBody: FC<IProps> = (props) => {
  const {header} = useSelectContext();

  return (
    <div className={styles.artifactSet} style={{flexGrow: props.setGrow}} {...props}>
      <Accordion
        reduceMotion={true}
        allowToggle
        className={styles.accordionContainer}
        bg="gray.600"
      >
        <AccordionItem className={styles.accordionItemContainer}>
          <AccordionButton className={styles.accordionBody}>
            {header}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel bg="gray.600" className={styles.accordionPanelContainer}>
            {props.children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

class Select extends React.Component<IProps, IState> {
  public static Item = SelectItem;

  state: IState = {
    header: this.props.header,
  }

  changeHeader(header: React.ReactNode) {
    this.setState({header});
  }

  render() {
    const {header} = this.state;
    const {
      onItemClick,
      changeHeaderOnClick,
    } = this.props;

    return (
      <SelectContext value={{
        header,
        onItemClick,
        changeHeader: this.changeHeader.bind(this),
        changeHeaderOnClick: changeHeaderOnClick ?? false,
      }}>
        <SelectBody {...this.props}>
          {this.props.children}
        </SelectBody>
      </SelectContext>
    );
  }
}

export default Select;