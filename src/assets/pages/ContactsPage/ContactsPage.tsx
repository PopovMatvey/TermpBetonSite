import React from 'react';
import { FormData } from "../../components/FormData/FormData";
import "../../css/modalNotification.css";
import './css/ContactPage.css';

export function ContactPage() {
    return (
        <>
            <div className="contact-page-block">
                {/* Базовая информация о компании */}
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
                        Полное официальное наименование  предприятия (для печатных форм документов): Общество с ограниченной ответственностью «ТермоБетон»
                    </span>
                    <span>
                        Юридический адрес: 391300, Рязанская обл., г. Касимов, ул. Новая Слобода, д. 18
                    </span>
                    <span>
                        Почтовый  адрес: 391300, Рязанская обл., г. Касимов, ул. Новая Слобода, д. 18
                    </span>
                    <span>
                        <a href="https://yandex.ru/maps/10773/kasimov/?ll=41.394433%2C54.960220&mode=whatshere&whatshere%5Bpoint%5D=41.393852%2C54.960424&whatshere%5Bzoom%5D=17&z=19.6">
                            Фактический адрес:  Рязанская обл. г.Касимов ул. Индустриальная д.34Б
                        </a>
                    </span>
                    <span>
                        <a href="tel:+7-910-644-50-33">+7-910-644-50-33</a>
                        <a href="tel:+7-910-643-58-95">+7-910-643-58-95</a>
                    </span>
                    <span>
                        Тел. / факс: (49131) 4-38-83
                    </span>
                    <span>
                        ИНН/КПП: 6226011044/622601001
                    </span>
                    <span>
                        ОГРН: 1116226000901
                    </span>
                    <span>
                        Номер расчётного счёта: 40702810900030001103
                    </span>
                    <span>
                        Местонахождение банка: 391300, Рязанская обл., г. Касимов, ул. Горького, д.1
                    </span>
                    <span>
                        Корреспондентский счет банка: 30101810500000000708
                    </span>
                    <span>
                        БИК: 046126708
                    </span>
                    <span>
                        ОКПО: 91167591
                    </span>
                    <span>
                        ОКВЭД: 23.61
                    </span>
                    <span>
                        Ф.И.О. главного бухгалтера: Ярославцева Галина Петровна
                    </span>
                    <span>
                        <a href="tel:+7-910-570-71-00">Тел. главного бухгалтера: 8-910-570-71-00</a>
                    </span>
                    <span>
                        <a href="mailto:termobeton@mail.ru">Эл. почта: termobeton@mail.ru</a>
                    </span>
                    <span>
                        <span> Директора:</span>
                        <samp> Попов Сергей Леонидович,</samp>
                        <samp> Дмитриев Сергей Александрович</samp>
                    </span>
                    <span>
                        действует на основании Устава
                    </span>
                </div>
                <FormData />
            </div>
        </>
    );
}