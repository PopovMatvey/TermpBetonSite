import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";

// Главное меню
export function Menu() {
    const [flagAltMenu,setFlagAltMenu] = useState(true);

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
    const hendlerHrferClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const arrayBeginnerLinks = document.querySelectorAll('.menu-block_items')[0].children;
        const arrayFooterLinks = getHrefsArray(document.querySelectorAll('.footer-content_navigation ul')[0].children);
        const footerLink = document.querySelectorAll("#" + event.currentTarget.id.split("-")[0] + '-footer');
        
        clearClassName(arrayBeginnerLinks);
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
            {/* Главное меню */}
            {flagAltMenu &&
                <div className="menu-block_items">
                    <Link to='/' onClick={hendlerHrferClick} id='mainPageHref-beginner' className="disable-href-beginner">Главная</Link>
                    <Link to='/production' onClick={hendlerHrferClick} id='productionPageHref-beginner'>Продукция</Link>
                    <Link to='/application' onClick={hendlerHrferClick} id='applicationPageHref-beginner'>Применение</Link>
                    <Link to='/price-list' onClick={hendlerHrferClick} id='priceListPageHref-beginner'>Прайс-лист</Link>
                    <Link to='/contacts' onClick={hendlerHrferClick} id='contactsPageHref-beginner'>Контакты</Link>
                </div>
            }
        </div>

    );
}