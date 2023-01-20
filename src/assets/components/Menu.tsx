import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../css/Menu.css";

export function Menu() {
    return (
        <div className="menu-block">
            <Link to='/'>Главная</Link>
            <Link to='/production'>Продукция</Link>
            <Link to='/application'>Применение</Link>
            <Link to='/price-list'>Прайс-лист</Link>
            <Link to='/contacts'>Контакты</Link>
        </div>
        
    );
}