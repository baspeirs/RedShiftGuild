import React, { useEffect, useState } from "react";
import '../styles/SlideShow.css';
import { RaidCard } from "./RaidCard";

export const SlideShow = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const delay = 5000;

    useEffect(() => {
        setTimeout(() => {
            setActiveIndex(previousIndex => previousIndex === props.raids.length -1 ? 0 : previousIndex + 1 )
        }, delay);
    }, [activeIndex, props.raids.length]);
    return (
        <div className="slide-show">
            <div className="slide-show-slider" style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)` }}>
                {props.raids.map((slide, index) => {
                    return <div className="slide" key={index}>
                        <RaidCard 
                            key={index}
                            raid={slide.raid}
                            completion={slide.completion}
                        />
                    </div>
                })}
            </div>
        </div>
    );
};
