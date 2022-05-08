import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { IconContext } from "react-icons";
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Calculator from "./Pages/Calculator/Calculator";
import Characters from "./Pages/Characters/Characters";
import "./App.scss";
import {RecoilRoot} from "recoil";
import CharacterEditor from "./Pages/CharacterEditor/CharacterEditor";
import {isNode} from "genshin-calculator/dist/Helpers/Envirement";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

const App = () => {
  console.log(isNode, "is node")

  return (
    <RecoilRoot>
      <BrowserRouter basename="/genshin-calc-front">
        <IconContext.Provider value={{ color: "white"}}>
          <ChakraProvider theme={theme}>
            <div className="App">
              <Header/>
              <div className="main">
                <Routes>
                  <Route index element={<Calculator/>}/>
                  <Route path="/characters" element={<Characters/>}/>
                  <Route path="/characters/:characterName" element={<CharacterEditor/>}/>
                </Routes>
              </div>
            </div>
          </ChakraProvider>
        </IconContext.Provider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
