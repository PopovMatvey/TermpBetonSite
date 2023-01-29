import { useState } from "react";

export function useNotificationWindowState() {

    const [titleText, setTitleText] = useState('undefiend');
    const [bodyText, setBodyText] = useState('undefiend');
    const [modalWindowState, setModalWindowState] = useState(false);

    function setStateModalWindow(parModalWindow: boolean) {
        setModalWindowState(parModalWindow);
    }

    function getStateModalWindow() {
        return modalWindowState;
    }

    return {
        titleText, setTitleText, bodyText, setBodyText, modalWindowState, setModalWindowState,
        setStateModalWindow, getStateModalWindow
    };
}