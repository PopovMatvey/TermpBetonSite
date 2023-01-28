import React,{ useEffect } from "react";
import "../css/modalNotification.css";
import { useContactFormState } from "../hook/contactFormState";
import { ModalNotificationProps } from "../types/ModalNotificationProps";

export function ModalNotification({ parTitleProps,parBodyText }: ModalNotificationProps) {

    return (
        // <div className="modal_notification">
        //     <h1>{parTitleProps}</h1>
        //     <span>{parBodyText}</span>
        // </div>
        <>
            <div className="body-modal-notification" />

            {/* // className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" */}
            {/* // onClick={onClose} */}

            <div className="modal-notification">
                <h1>{parTitleProps}</h1>
                <span>{parBodyText}</span>
            </div>
        </>
    );
}