import React,{ useState } from "react";
import "../css/Slider.css";
import { sliderElementObjects } from "../data/sliderElementObjects";
import { SliderElementProps } from "../types/SliderElementProps";
import { SliderElement } from "./SliderElement";

export function Slider() {
    // const sliderParams: SliderElementProps[] = sliderElementObjects();
    const [sliderElements,setSliderElements] = useState(sliderElementObjects());
    const [showSliderElements,setShowSliderElements] = useState(getFirstElementsArray(sliderElements));

    function getFirstElementsArray(array: any) {
        let returndArray: any = [];
        let lengthReturnedArray = 3;

        for (let i = 0; i < lengthReturnedArray; i++) {
            returndArray.push(array[i]);
        }

        return returndArray;
    }

    const hendlerLeftArrorClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    }

    const hendlerRighttArrorClick = (event: React.MouseEvent<HTMLButtonElement>) => {

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
                    {
                        console.log(showSliderElements)
                    }
                </div>
                <div className="slider-block_buttons_panel">
                    <button onClick={hendlerLeftArrorClick}>{'<'}</button>
                    <div className="slider-block_buttons_panel__bullits">
                        {
                            sliderElements.map(() =>
                                <div 
                                // key={i++} 
                                className="bullit bullit-active"></div>
                            )
                        }
                    </div>
                    <button onClick={hendlerRighttArrorClick}>{'>'}</button>
                </div>
            </div>
        </div>
    );
}