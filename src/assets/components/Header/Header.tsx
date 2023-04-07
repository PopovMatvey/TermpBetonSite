import React from "react";
import "./css/header.css";
import { InfoHeader } from "../InfoHeader/InfoHeader";
import { Menu } from "../Menu/Menu";

// Шапка
export function Header(){
    return(
        <header>
          <InfoHeader/>  
          <Menu/>
        </header>
    );
}