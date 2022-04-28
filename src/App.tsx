import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Calculator from "./Pages/Calculator/Calculator";
import Roster from "./Pages/Roster/Roster";
import "./App.scss";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <div className="App">
          <Header/>
          <div className="main">
            <Routes>
              <Route index element={<Calculator/>}/>
              <Route path="/roster" element={<Roster/>}/>
            </Routes>
          </div>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
