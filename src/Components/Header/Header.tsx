import {Box, Button, Flex} from '@chakra-ui/react';
import React from 'react';
import {Link} from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Box w="100%" className={styles.header} bg="gray.700">
      <Flex alignItems="center" justifyContent="center">
        <Link to="/">
          <Button className={styles.navItem}>Калькулятор</Button>
        </Link>
        <Link to="/roster">
          <Button className={styles.navItem}>Отряд</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
