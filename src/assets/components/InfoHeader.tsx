import React from "react";
import "../css/InfoHeader.css";
import logoCompany from "../image/logoCompany.png";

// Информация шапки
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
                    <a href="tel: +7-910-644-50-33">
                        <i className="fa ti-mobile" aria-hidden="true"></i>
                        +7-910-644-50-33
                    </a>
                    <a href="tel: +7-910-643-58-95">
                        <i className="fa ti-mobile" aria-hidden="true"></i>
                        +7-910-643-58-95
                    </a>
                </div>
                <div className="contacts-block_address">
                    <a href="https://yandex.ru/maps/10773/kasimov/?ll=41.394433%2C54.960220&mode=whatshere&whatshere%5Bpoint%5D=41.393852%2C54.960424&whatshere%5Bzoom%5D=17&z=19.6">
                        <i className="fa ti-map i-map" aria-hidden="true"></i>
                        Рязанская обл. г.Касимов ул. Индустриальная д.34 б
                    </a>
                    <a href="mailto:termobeton@mail.ru">
                        <i className="fa ti-email i-map" aria-hidden="true"></i>
                        termobeton@mail.ru
                    </a>
                </div>
            </div>
        </div>
    );
}