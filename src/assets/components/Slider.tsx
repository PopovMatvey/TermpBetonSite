import React from "react";
import "../css/Slider.css";
import { SliderElement } from "./SliderElement";

export function Slider() {
    return (
        <div className="slider-block">
            <div className="slider-block_images">
                <SliderElement imagePath='imagePath' titleText='imagePath' />
                <SliderElement imagePath='imagePath' titleText='bdfdf' />
                <SliderElement imagePath='imagePath' titleText='маыввы' />
            </div>
            <div className="slider-block_buttons_panel">
                <button>{'<'}</button>
                <div className="slider-block_buttons_panel__bullits">

                </div>
                <button>{'>'}</button>
            </div>
        </div>
    );
}