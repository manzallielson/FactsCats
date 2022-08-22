import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header"

import Routes from "./routes";

export const App = () => {
  return (

   
    <ChakraProvider>
      <BrowserRouter>
      <Header/>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
  

};
