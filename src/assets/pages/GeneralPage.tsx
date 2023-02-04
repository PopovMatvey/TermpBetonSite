import React from 'react';
import { Slider } from '../components/Slider';
import '../css/GeneralPage.css';

export function GeneralPage() {
    return (
        <>
            <div className="general-page">
                <h1>Основная страница</h1>
                <Slider />
            </div>
        </>
    );
}