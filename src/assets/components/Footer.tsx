import React from "react";
import '../css/Footer.css'
import logoCompany from "../image/logoCompany.png";

export function Footer() {
    return (
        <footer>
            <div className="footer-content wrapper-sa">
                <div className="footer-content_img">
                    <img src={logoCompany} alt="" />
                </div>
                <div className="footer-content_navigation">
                    <h3>Навигация</h3>
                    <ul>
                        <li>Главная </li>
                        <li>Продукция</li>
                        <li>Примнение</li>
                        <li>Прайс-лист</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="footer-content_contacts">
                    <h3>Контакты</h3>
                    <ul>
                        <li>
                            <a href="tel:+7-910-644-50-33">
                                <i className="fa ti-mobile" aria-hidden="true"></i>
                                +7-910-644-50-33
                            </a>
                        </li>
                        <li>
                            <a href="tel: +7-910-643-58-95">
                                <i className="fa ti-mobile" aria-hidden="true"></i>
                                +7-910-643-58-95
                            </a>
                        </li>
                        <li>
                            <a href="tel: +7-910-570-71-00">
                                <i className="fa ti-mobile" aria-hidden="true"></i>
                                +7-910-570-71-00
                            </a>
                        </li>
                        <li>
                            <a href="mailto:termobeton@mail.ru">
                                <i className="fa ti-email i-map" aria-hidden="true"></i>
                                termobeton@mail.ru
                            </a>
                        </li>
                        <li>
                            <a href="https://yandex.ru/maps/10773/kasimov/?ll=41.394433%2C54.960220&mode=whatshere&whatshere%5Bpoint%5D=41.393852%2C54.960424&whatshere%5Bzoom%5D=17&z=19.6">
                                <i className="fa ti-map i-map" aria-hidden="true"></i>
                                Рязанская обл. г.Касимов ул. Индустриальная д.34 б
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="signature">
                <span>Copyright © 2023 ООО "Технология". Design by Web</span>
            </div>
        </footer>
    );
}