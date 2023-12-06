import React, { useEffect, useState } from "react";
import '../styles/SlideShow.css'
import { RaidCard } from "./RaidCard";


export const SlideShow = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const delay = 2500;
    const slides = [
        {raid: 'magtheridon', completion: '1/1'},
        {raid: 'gruul and maulgar', completion: '1/1'},
        {raid: 'karazhan', completion: '1/1'},
    ];
    const items = ["#0088FE", "#00C49F", "#FFBB28"];

    useEffect(() => {
        setTimeout(() => {
            setActiveIndex(previousIndex => previousIndex === items.length -1 ? 0 : previousIndex + 1 )
        }, delay);
    }, [activeIndex, items.length])
    return (
        <div className="slide-show">
            <div className="slide-show-slider" style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)` }}>
                {slides.map((slide, index) => {
                    return <div className="slide" key={index}>
                        <RaidCard 
                            raid={slide.raid}
                            completion={slide.completion}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}