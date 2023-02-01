import React from "react";
import '../css/Footer.css'
import { Link } from "react-router-dom";
import logoCompany from "../image/logoCompany.png";

// Подвал
export function Footer() {

    // Очистить класс элемента
    function clearClassName(array: HTMLCollection) {
        for (let i = 0; i < array.length; i++) {
            array[i].className = "";
        }
    }

    // Получить массив ссылок
    function getHrefsArray(array: HTMLCollection) {
        let returnedArray: any = [];

        for (let i = 0; i < array.length; i++) {
            returnedArray.push(array[i].children[0]);
        }

        return returnedArray;
    }

    // Обработчик нажатия на ссылку
    const hendlerHrferClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const menuBlockChildren = document.querySelectorAll('.menu-block_items')[0].children;
        
        if (window.screen.width > 897) {
            const arrayBeginnerLinksDesktop = document.querySelectorAll('.menu-block_desktop_items')[0].children;
            const beginnerMenuLinkDesktop = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-Desktopbeginner');
            const arrayFooterLinks = getHrefsArray(document.querySelectorAll('.footer-content_navigation ul')[0].children);
            const footerLink = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-footer');

            clearClassName(arrayBeginnerLinksDesktop);
            clearClassName(arrayFooterLinks);
            beginnerMenuLinkDesktop[0].className = 'disable-href-beginner';
            footerLink[0].className = 'disable-href-footer';
        } else if ((window.screen.width < 897) && (menuBlockChildren.length === 2)) {
            const arrayBeginnerLinksMobile = document.querySelectorAll('.menu-block_mobile_items')[0].children;
            const beginnerMenuLinkMobile = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-Mobilebeginner');
            const arrayFooterLinks = getHrefsArray(document.querySelectorAll('.footer-content_navigation ul')[0].children);
            const footerLink = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-footer');

            clearClassName(arrayBeginnerLinksMobile);
            clearClassName(arrayFooterLinks);
            beginnerMenuLinkMobile[0].className = 'disable-href-beginner';
            footerLink[0].className = 'disable-href-footer';
        } else if ((window.screen.width < 897) && (menuBlockChildren.length === 1)) {
            const arrayFooterLinks = getHrefsArray(document.querySelectorAll('.footer-content_navigation ul')[0].children);
            const footerLink = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-footer');

            clearClassName(arrayFooterLinks);
            footerLink[0].className = 'disable-href-footer';
        }
    }

    return (
        <footer>
            <div className="footer-content wrapper-sa">
                {/* Логотип компании */}
                <div className="footer-content_img">
                    <img src={logoCompany} alt="" />
                </div>
                {/* Подвальное меню */}
                <div className="footer-content_navigation">
                    <h3>Навигация</h3>
                    <ul>
                        <li>
                            <Link to='/' onClick={hendlerHrferClick} id='mainPageHref-footer' className="disable-href-footer">Главная</Link>
                        </li>
                        <li>
                            <Link to='/production' onClick={hendlerHrferClick} id='productionPageHref-footer'>Продукция</Link>
                        </li>
                        <li>
                            <Link to='/application' onClick={hendlerHrferClick} id='applicationPageHref-footer'>Применение</Link>
                        </li>
                        <li>
                            <Link to='/price-list' onClick={hendlerHrferClick} id='priceListPageHref-footer'>Прайс-лист</Link>
                        </li>
                        <li>
                            <Link to='/contacts' onClick={hendlerHrferClick} id='contactsPageHref-footer'>Контакты</Link>
                        </li>
                    </ul>
                </div>
                {/* Контакты представителей компании */}
                <div className="footer-content_contacts">
                    <h3>Контакты</h3>
                    <ul>
                        <li>
                            <a href="tel:+7-910-644-50-33" >
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