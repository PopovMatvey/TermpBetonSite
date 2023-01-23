import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";

// Главное меню
export function Menu() {
    const [flagAltMenu,setFlagAltMenu] = useState(false);

    //Обработчик нажатия на кнопку альтернативного меню
    function hendlerAltMenuButton() {
        setFlagAltMenu(!flagAltMenu);
    }

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
    const hendlerHrferDesktopClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const arrayBeginnerLinksDesktop = document.querySelectorAll('.menu-block_desktop_items')[0].children;
        const arrayFooterLinks = getHrefsArray(document.querySelectorAll('.footer-content_navigation ul')[0].children);
        const footerLink = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-footer');

        clearClassName(arrayBeginnerLinksDesktop);
        clearClassName(arrayFooterLinks);
        event.currentTarget.className = 'disable-href-beginner';
        footerLink[0].className = 'disable-href-footer';
    }

    const hendlerHrferMobileClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const arrayBeginnerLinksMobile = document.querySelectorAll('.menu-block_mobile_items')[0].children;
        const arrayFooterLinks = getHrefsArray(document.querySelectorAll('.footer-content_navigation ul')[0].children);
        const footerLink = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-footer');

        clearClassName(arrayBeginnerLinksMobile);
        clearClassName(arrayFooterLinks);
        event.currentTarget.className = 'disable-href-beginner';
        footerLink[0].className = 'disable-href-footer';
    }

    return (
        <div className="menu-block">
            {/* Кнопка альтернативного меню */}
            <div className="menu-block_alit-button">
                <button onClick={hendlerAltMenuButton}>
                    <i className="fa ti-menu-alt" aria-hidden="true" ></i>
                </button>
            </div>
            <div className="menu-block_items">
                {/* Главное меню для десктопных устройств */}
                <div className="menu-block_desktop_items">
                    <Link to='/' onClick={hendlerHrferDesktopClick} id='mainPageHref-Desktopbeginner' className="disable-href-beginner">Главная</Link>
                    <Link to='/production' onClick={hendlerHrferDesktopClick} id='productionPageHref-Desktopbeginner'>Продукция</Link>
                    <Link to='/application' onClick={hendlerHrferDesktopClick} id='applicationPageHref-Desktopbeginner'>Применение</Link>
                    <Link to='/price-list' onClick={hendlerHrferDesktopClick} id='priceListPageHref-Desktopbeginner'>Прайс-лист</Link>
                    <Link to='/contacts' onClick={hendlerHrferDesktopClick} id='contactsPageHref-Desktopbeginner'>Контакты</Link>
                </div>
                {/* Главное меню для мобильных устройств*/}
                {flagAltMenu &&
                    <div className="menu-block_mobile_items">
                        <Link to='/' onClick={hendlerHrferMobileClick} id='mainPageHref-Mobilebeginner' className="disable-href-beginner">Главная</Link>
                        <Link to='/production' onClick={hendlerHrferMobileClick} id='productionPageHref-Mobilebeginner'>Продукция</Link>
                        <Link to='/application' onClick={hendlerHrferMobileClick} id='applicationPageHref-Mobilebeginner'>Применение</Link>
                        <Link to='/price-list' onClick={hendlerHrferMobileClick} id='priceListPageHref-Mobilebeginner'>Прайс-лист</Link>
                        <Link to='/contacts' onClick={hendlerHrferMobileClick} id='contactsPageHref-Mobilebeginner'>Контакты</Link>
                    </div>
                }
            </div>
        </div>

    );
}