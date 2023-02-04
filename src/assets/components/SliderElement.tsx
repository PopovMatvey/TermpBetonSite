import React from "react";
import '../css/SliderElement.css';
import { SliderElementProps } from "../types/SliderElementProps";

export function SliderElement({ imagePath,titleText,classList }: SliderElementProps) {
    return (
        <div className={classList}>
            <img src={imagePath} alt="Изображение слайдера" />
            <div className="slider-element_inscription">
                <h2>{titleText}</h2>
            </div>
        </div>
    );
}