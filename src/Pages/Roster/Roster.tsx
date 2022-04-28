import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import CharacterCard from '../../Components/CharacterCard/CharacterCard';

const Roster = () => {
  return (
    <Container maxW="1200px">
      <CharacterCard/>
    </Container>
  );
};

export default Roster;
