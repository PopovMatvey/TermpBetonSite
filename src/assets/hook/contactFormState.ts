import { useState } from "react";

// Состояние формыы
export function useContactFormState() {
    const [nameInput,setNameInput] = useState('');          // Сосотояние поля "Имя"
    const [phoneInput,setPhoneInput] = useState('+7');      // Сосотояние поля "Телефон"
    const [emailInput,setEmailInput] = useState('');        // Сосотояние поля "Почта"
    const [messageInput,setMessageInput] = useState('');    // Сосотояние поля "сообщение"

    return {
        nameInput,setNameInput,phoneInput,setPhoneInput,emailInput,setEmailInput,messageInput,setMessageInput
    }

}