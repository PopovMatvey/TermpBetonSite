import React from 'react';
import './css/GeneralPage.css';
import { arrayImageGeneralSlider } from '../../data/arrayImageGeneralSlider';
import { ImageSlider } from '../../components/ImageSlider';

export function GeneralPage() {
    return (
        <>
            <div className="general-page">
                <h1>Основная страница</h1>
                <div className="general-page_slider-container">
                    <ImageSlider items={arrayImageGeneralSlider} />
                </div>
            </div>
        </>
    );
}