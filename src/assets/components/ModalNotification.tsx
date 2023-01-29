// import React, { useEffect, useState } from "react";
import React from "react";
import "../css/modalNotification.css";
// import { useNotificationWindowState } from "../hook/notificationWindowState";
// import { ModalNotificationProps } from "../types/ModalNotificationProps";

export function ModalNotification(
    // { parTitleText, parBodyText, parModalWindowState }: ModalNotificationProps
    ) {

    return (

        <>
            {
                < div id="modalWindow" >
                    <div className="body-modal-notification" onClick={() => {
                    }} />
                    <div className="modal-notification">
                        <button onClick={() => {
                        }}>X</button>
                        <h1>{}</h1>
                        <span>{}</span>
                    </div>
                </div >
            }
        </>
    );
}