import React,{ useEffect } from "react";
import "../css/InfoHeader.css";
import logoCompany from "../image/logoCompany.png";


export function InfoHeader() {
    return (
        <div className="info-header-block wrapper-sa">
            <div className="logo-block">
                <img src={logoCompany} alt="" />
            </div>
            <div className="title-block">
                <h3>Производственно-строительная компания</h3>
            </div>
            <div className="contacts-block">
                <div className="contacts-block_phones">
                    <a href="">+7-910-644-50-33</a>
                    <a href="">+7-910-643-58-95</a>
                </div>
                <div className="contacts-block_address">
                    <a href="">
                        Рязанская обл. г.Касимов ул. Индустриальная д.34 б
                    </a>
                    <a href="">
                        termobeton@mail.ru
                    </a>
                </div>
            </div>
        </div>
    );
}