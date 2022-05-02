import React, {Component} from 'react';
import {Box, BoxProps} from "@chakra-ui/react";
import {IBaseCharacter} from "../../CharacterTypes/IBaseCharacter";
import CharacterCardHeader from "./CharacterCardHeader";
import CharacterCardWeapon from "./CharacterCardWeapon";
import CharacterCardStats from "./CharacterCardStats";
import {CharacterCardContext} from "./CharacterCardContext";
import styles from "./CharacterCard.module.scss";

interface IProps extends BoxProps {
  character: IBaseCharacter;
}

class CharacterCard extends Component<IProps> {
  public static Header = CharacterCardHeader;
  public static Weapon = CharacterCardWeapon;
  public static Stats = CharacterCardStats;

  render() {
    return (
      <Box bg="gray.600" className={styles.card} {...this.props}>
        <CharacterCardContext value={this.props.character}>
          {this.props.children}
        </CharacterCardContext>
      </Box>
    );
  }
}

export default CharacterCard;
