import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { IconContext } from "react-icons";
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Calculator from "./Pages/Calculator/Calculator";
import Character from "./Pages/Character/Character";
import "./App.scss";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

const App = () => {
  return (
    <BrowserRouter>
      <IconContext.Provider value={{ color: "white"}}>
        <ChakraProvider theme={theme}>
          <div className="App">
            <Header/>
            <div className="main">
              <Routes>
                <Route index element={<Calculator/>}/>
                <Route path="/characters" element={<Character/>}/>
              </Routes>
            </div>
          </div>
        </ChakraProvider>
      </IconContext.Provider>
    </BrowserRouter>
  );
}

export default App;
