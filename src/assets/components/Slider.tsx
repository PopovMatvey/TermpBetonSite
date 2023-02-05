import React, { useState } from "react";
import "../css/Slider.css";
import { sliderElementObjects } from "../data/sliderElementObjects";
import { SliderElementProps } from "../types/SliderElementProps";
import { SliderElement } from "./SliderElement";

export function Slider() {
    const [sliderElements, setSliderElements] = useState(sliderElementObjects());
    const [showSliderElements, setShowSliderElements] = useState(getFirstElementsArray(sliderElements));
    let indexKeyBullit = 0;

    function getFirstElementsArray(array: any) {
        let returndArray: any = [];
        let lengthReturnedArray = 3;

        for (let i = 0; i < lengthReturnedArray; i++) {
            returndArray.push(array[i]);
        }

        return returndArray;
    }

    
    function getKeySecondSliderElement(array: any) {
        return array[1].key;
    }


    function getKeyPenultimateElement(array: any) {
        return array[array.length - 1].key
    }

    const hendlerLeftArrorClick = (event: React.MouseEvent<HTMLButtonElement>) => {



        console.log(getKeySecondSliderElement(showSliderElements));
        console.log(getKeyPenultimateElement(showSliderElements));

        // console.log(showSliderElements);

        setShowSliderElements([
            {
                key: 2,
                imagePath: 'imagePath',
                titleText: 'bdfdf',
                classList: 'slider-element active',
            },
            {
                key: 3,
                imagePath: 'imagePath',
                titleText: 'маыввы',
                classList: 'slider-element',
            },
            {
                key: 4,
                imagePath: 'imagePath',
                titleText: 'uigui',
                classList: 'slider-element',
            },
        ]);

    }

    const hendlerRighttArrorClick = (event: React.MouseEvent<HTMLButtonElement>) => {

        console.log(showSliderElements)
    }

    return (
        <div className="slider-container">
            <div className="slider-block">
                <div className="slider-block_images">
                    {
                        showSliderElements.map((element: SliderElementProps) =>
                            <SliderElement key={element.key} imagePath={element.imagePath} titleText={element.titleText} classList={element.classList} />
                        )
                    }
                </div>
                <div className="slider-block_buttons_panel">
                    <button onClick={hendlerLeftArrorClick}>{'<'}</button>
                    <div className="slider-block_buttons_panel__bullits">
                        {
                            sliderElements.map(() =>
                                <div
                                    key={indexKeyBullit++}
                                    className="bullit bullit-active">
                                </div>
                            )
                        }
                    </div>
                    <button onClick={hendlerRighttArrorClick}>{'>'}</button>
                </div>
            </div>
        </div>
    );
}