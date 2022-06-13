import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { IconContext } from "react-icons";
import {PersistStorage, recoilPersist} from 'recoil-persist'
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Calculator from "./Pages/Calculator/Calculator";
import Characters from "./Pages/Characters/Characters";
import "./App.scss";
import {RecoilRoot} from "recoil";
import CharacterEditor from "./Pages/CharacterEditor/CharacterEditor";
import Artifacts from "./Pages/Artifacts/Artifacts";
import RecoilNexus from "recoil-nexus";
import IndexDBStorage from "./Storage/IndexDB";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config });
const assetsUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? process.env.PUBLIC_URL : "../" + process.env.PUBLIC_URL;

const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter basename={!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/genshin-calc-front"}>
        <IconContext.Provider value={{ color: "white"}}>
          <ChakraProvider theme={theme}>
            <div className="App">
              <Header/>
              <div className="main">
                <Routes>
                  <Route index element={<Calculator/>}/>
                  <Route path="/characters" element={<Characters/>}/>
                  <Route path="/characters/:characterName" element={<CharacterEditor/>}/>
                  {/*<Route path="/artifacts" element={<Artifacts/>}/>*/}
                </Routes>
              </div>
            </div>
          </ChakraProvider>
        </IconContext.Provider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export {assetsUrl};

export default App;
