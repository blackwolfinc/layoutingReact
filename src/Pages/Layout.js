import React, { useRef } from "react";
import { FooterDefault } from "../Assets/Components/Footer/FooterDefault";
import { NavbarDefault } from "../Assets/Components/Navbar/NavbarDefault";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "../Routes/Routers";
import { Tes } from "./tes/Tes";

 export const Layout = () => {
  let kondisi = true;
  
  return (
    <div>
      {kondisi ? (
        <>
          <NavbarDefault />
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
          <FooterDefault />
        </>
      ) : (
        <>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </>
      )}
    </div>
  );
};

  let akuData = "sarimen pergi ke pasar"

export  const Bagas = () => {
  let kondisi = true;
  return (
    <div>
      {kondisi ? (
        <>
        
      
          <NavbarDefault />
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
         
          <FooterDefault />
          
        </>
      ) : (
        <>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
     
        </>
      )}
    </div>
  );
};


export default Bagas

