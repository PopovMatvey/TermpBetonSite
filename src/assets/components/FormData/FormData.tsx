import React,{ useState } from "react";
import "./css/formData.css";
import { useContactFormState } from '../../hook/contactFormState';
import { useNotificationWindowState } from '../../hook/notificationWindowState';
import { request } from '../../hook/request';

export function FormData() {
    // Состояния полей ввода формы
    const {
        nameInput,setNameInput,
        phoneInput,setPhoneInput,
        emailInput,setEmailInput,
        messageInput,setMessageInput,
    } = useContactFormState();

    // Состояния модального окна
    const {
        titleText,setTitleText,
        bodyText,setBodyText,
        modalWindowState,setModalWindowState,
    } = useNotificationWindowState();

    const [loaderStatus,setLoaderStatus] = useState(false);

    // Обнуление всех полей
    function resetInputFields() {
        setNameInput("");
        setPhoneInput("+7");
        setEmailInput("");
        setMessageInput("");
    }

    // Получить модальное окно
    function getModalWindow(parTitleText: string,parBodyText: string,parModalWindowState: boolean) {
        setTitleText(parTitleText);
        setBodyText(parBodyText);
        setModalWindowState(parModalWindowState);
    }

    // Валидность поля ввода "Телефон"
    function validPhoneInput(parChar: string) {
        if ((parChar === '1') || (parChar === '2') || (parChar === '3') || (parChar === '4') || (parChar === '5') ||
            (parChar === '6') || (parChar === '7') || (parChar === '8') || (parChar === '9') || (parChar === '0') ||
            (parChar === '-') || (parChar === '(') || (parChar === ')')) {
            return true;
        }

        return false;
    }

    // Проверка на цифру
    function checkOnDigital(parChar: string) {
        if ((parChar === '1') || (parChar === '2') || (parChar === '3') || (parChar === '4') || (parChar === '5') ||
            (parChar === '6') || (parChar === '7') || (parChar === '8') || (parChar === '9') || (parChar === '0')) {
            return true;
        }

        return false;
    }

    // Получить последний символ
    function getLastSimbolString(parString: string) {
        return parString[parString.length - 1];
    }

    // Проверить заполненность полей
    function checkFillFields(parRequestedObject: any) {
        return (((parRequestedObject.name === '') && (parRequestedObject.phone === '') && (parRequestedObject.email === '')) ||
            ((parRequestedObject.name === '') && (parRequestedObject.phone === '')) ||
            ((parRequestedObject.name === '') && (parRequestedObject.email === '')) ||
            ((parRequestedObject.phone === '') && (parRequestedObject.email === '')) ||
            (parRequestedObject.name === '') || (parRequestedObject.phone === '') || (parRequestedObject.email === '') ||
            getAmountDigital(parRequestedObject.phone) < 11);
    }

    // Получить количество цифр
    function getAmountDigital(parString: string) {
        let counter: number = 0;

        for (let i = 0; parString.length > i; i++) {
            if (checkOnDigital(parString[i])) {
                counter++;
            }
        }

        return counter;
    }

    // Получить уведомление предупреждения
    function getNotificationAttantion(parRequestedObject: any) {
        if ((parRequestedObject.name === '') && (parRequestedObject.phone === '') && (parRequestedObject.email === '')) {
            getModalWindow("Внимаине","Заполните пожалуйста поля: имя, телефон, почта",true);

            return;
        }

        if ((parRequestedObject.name === '') && (parRequestedObject.phone === '')) {
            getModalWindow("Внимаине","Заполните пожалуйста поля: имя, телефон, почта",true);

            return;
        }

        if ((parRequestedObject.name === '') && (parRequestedObject.email === '')) {
            getModalWindow("Внимаине","Заполните пожалуйста поля: имя, почта",true);

            return;
        }

        if ((parRequestedObject.phone === '') && (parRequestedObject.email === '')) {
            getModalWindow("Внимаине","Заполните пожалуйста поля: телефон, почта",true);

            return;
        }

        if (parRequestedObject.name === '') {
            getModalWindow("Внимаине","Заполните пожалуйста имя",true);

            return;
        }

        if (parRequestedObject.phone === '') {
            getModalWindow("Внимаине","Заполните пожалуйста телефон",true);

            return;
        }

        if (parRequestedObject.email === '') {
            getModalWindow("Внимаине","Заполните пожалуйста почту",true);

            return;
        }

        if (getAmountDigital(parRequestedObject.phone) < 11) {
            getModalWindow("Внимаине","Неверный формат номера, должно быть 11 цифр, введено " + getAmountDigital(parRequestedObject.phone),true);

            return;
        }
    }

    // Получить уведомление с сервера
    function getNotificationServer(parStatusRequest: number | undefined) {
        if (parStatusRequest === 200) {
            getModalWindow("Успех","Всё было успешно отправлено",true);
            resetInputFields();

            return;
        }

        getModalWindow("Провал","Сервер сейчас недоступен, попытайтесь отправить данные чуть позже :(",true);

        return;
    }

    // Обработчик Отправки данных с формы
    const submitDataFormHendler = async (event: React.MouseEvent<HTMLFormElement>) => {
        const apiUrl = '/api/mail/';
        const httpMethod = "POST";
        let postRequestStatus: number | undefined;
        const requestedObject: any = {
            name: nameInput.trim(),
            phone: phoneInput.trim(),
            email: emailInput.trim(),
            message: messageInput.trim(),
        }
        const submitInput: Element | null = document.querySelector("#submitInput");

        event.preventDefault();

        if (checkFillFields(requestedObject)) {
            getNotificationAttantion(requestedObject);

            return;
        }

        submitInput?.classList.add('disable-submit-button');
        setLoaderStatus(true);
        postRequestStatus = await request(apiUrl,httpMethod,requestedObject);
        getNotificationServer(postRequestStatus);
        setLoaderStatus(false);
        submitInput?.classList.remove('disable-submit-button')
    }

    return (
        <>
            {/* Форма */}
            <div className="contact-page-block_form">
                <h2>ФОРМА СВЯЗИ С НАМИ</h2>
                <form onSubmit={submitDataFormHendler}>
                    {/* Поле ввода имени */}
                    <div className="contact-page-block_form_row">
                        <label htmlFor="nameField">Ваше имя</label>
                        <input type="text" id='nameField' value={nameInput} placeholder='*Имя' onChange={(event) => {
                            setNameInput(event.target.value);
                        }} />
                    </div>
                    {/* Поле ввода телефона */}
                    <div className="contact-page-block_form_row">
                        <label htmlFor="phoneField">Номер телефона</label>
                        <input type='tel' id='phoneField' value={phoneInput} placeholder='*Телефон' onChange={(event) => {
                            const inputString = event.target.value;
                            const validBollValue = validPhoneInput(getLastSimbolString(inputString));

                            if ((inputString.length > 1) && validBollValue && (getAmountDigital(inputString) < 12)) {
                                setPhoneInput(event.target.value);
                            }
                        }} />
                    </div>
                    {/* Поле ввода почты */}
                    <div className="contact-page-block_form_row">
                        <label htmlFor="mailField">Почта</label>
                        <input type='email' id='mailField' value={emailInput} placeholder='Почта' onChange={(event) => {
                            setEmailInput(event.target.value);
                        }} />
                    </div>
                    {/* Поле ввода сообщения */}
                    <div className="contact-page-block_form_row">
                        <label htmlFor="massegeField">Ваше сообщение</label>
                        <textarea name="massege" id="massegeField" value={messageInput} placeholder='Сообщение' onChange={(event) => {
                            setMessageInput(event.target.value);
                        }}>
                        </textarea>
                    </div>
                    {/* Кнопка отправки данных с формы */}
                    <div className="contact-page-block_form_row">
                        <input className='submit-button' type='submit' id='submitInput' value="Отправить" />
                        {loaderStatus && <span className='loader-notification'>Подождите...</span>}
                    </div>
                </form>
            </div>
            {/* Модальное окно */
                <>
                    {modalWindowState &&
                        < div id="modalWindow" >
                            <div className="body-modal-notification" onClick={() => {
                                setModalWindowState(false);
                            }} />
                            <div className="modal-notification">
                                <button onClick={() => {
                                    setModalWindowState(false);
                                }}>X</button>
                                <div className="modal-notification_content">
                                    <h1>{titleText}</h1>
                                    <span>{bodyText}</span>
                                </div>
                            </div>
                        </div >
                    }
                </>
            }
        </>
    )
}
