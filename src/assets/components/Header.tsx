import React from "react";
import { InfoHeader } from "./InfoHeader";
import { Menu } from "./Menu";
import "../css/header.css";

// Шапка
export function Header(){
    return(
        <header>
          <InfoHeader/>  
          <Menu/>
        </header>
    );
}