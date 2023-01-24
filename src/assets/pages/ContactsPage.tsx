import React from 'react';
import '../css/ContactPage.css';

export function ContactPage() {

    const submitDataFormHendler = (event:React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("send");
    }

    return (
        <div className="contact-page-block">
            <h1>Контакты</h1>
            <h2>ООО "Термобетон"</h2>
            <div className="contact-page-block_text">
                <span>
                    <a href="https://yandex.ru/maps/10773/kasimov/?ll=41.394433%2C54.960220&mode=whatshere&whatshere%5Bpoint%5D=41.393852%2C54.960424&whatshere%5Bzoom%5D=17&z=19.6">
                        Рязанская обл. г.Касимов ул. Индустриальная д.34 б
                    </a>
                </span>
                <span>
                    <a href="tel:+7-910-644-50-33">+7-910-644-50-33</a>
                    <a href="tel:+7-910-643-58-95">+7-910-643-58-95</a>
                </span>
                <span>
                    <a href="mailto:termobeton@mail.ru">termobeton@mail.ru</a>
                </span>
            </div>
            <h2>Реквизиты ООО "Термобетон"</h2>
            <div className="contact-page-block_text">
                <span>
                    <a href="https://yandex.ru/maps/10773/kasimov/?ll=41.394433%2C54.960220&mode=whatshere&whatshere%5Bpoint%5D=41.393852%2C54.960424&whatshere%5Bzoom%5D=17&z=19.6">
                        Юридический адрес:  Рязанская обл. г.Касимов ул. Индустриальная д.34 б
                    </a>
                </span>
                <span>
                    <a href="tel:+7-910-644-50-33">+7-910-644-50-33</a>
                    <a href="tel:+7-910-643-58-95">+7-910-643-58-95</a>
                </span>
                <span>
                    ИНН
                </span>
                <span>
                    КПП
                </span>
                <span>
                    Р/c
                </span>
                <span>
                    БИК
                </span>
                <span>
                    К/с
                </span>
                <span>
                    ОГРН
                </span>
                <span>
                    ОКАТО
                </span>
                <span>
                    ОКВЭД
                </span>
                <span>
                    ОКПО
                </span>
                <span>
                    <a href="mailto:termobeton@mail.ru">Эл. почта: termobeton@mail.ru</a>
                </span>
                <span>
                    <span> Директора:</span>
                    <a> Попов Сергей Леонидович,</a>
                    <a> Дмитриев Сергей Александрович</a>
                </span>
                <span>
                    действует на основании Устава
                </span>
            </div>
            <div className="contact-page-block_form">
                <h2>ФОРМА СВЯЗИ С НАМИ</h2>
                <form onSubmit={submitDataFormHendler}>
                    <div className="contact-page-block_form_row">
                        <label htmlFor="">Ваше имя</label>
                        <input type="text" />
                    </div>
                    <div className="contact-page-block_form_row">
                        <label htmlFor="">Номер телефона</label>
                        <input type='tel' />
                    </div>
                    <div className="contact-page-block_form_row">
                        <label htmlFor="">Почта</label>
                        <input type='email' />
                    </div>
                    <div className="contact-page-block_form_row">
                        <label htmlFor="">Ваше сообщение</label>
                        <textarea name="" id="">
                        </textarea>
                    </div>
                    <div className="contact-page-block_form_row">
                        <input className='submit-button' type='submit' value="Отправить" />
                    </div>
                </form>
            </div>
        </div>
    );
}