import { useState } from "react";

export function useContactFormState() {
    const [nameInput,setNameInput] = useState('');
    const [phoneInput,setPhoneInput] = useState('');
    const [emailInput,setEmailInput] = useState('');
    const [messageInput,setMessageInput] = useState('');

    return { nameInput,setNameInput,phoneInput,setPhoneInput,emailInput,setEmailInput,messageInput,setMessageInput }

}