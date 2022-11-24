import React, {useEffect, useState} from "react";
import Light from "../Light";
import "./TrafficLight.css";

const lightDurations = [1000, 2000, 4000];

const TrafficLight = (props:TrafficLightProps) => {
    const [activeColor, setActiveColor] = useState<number>(props.initTurnOnLightNumber);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveColor((activeColor + 1) % 3);
        }, lightDurations[props.initTurnOnLightNumber ? (activeColor + 2) % 3 : activeColor]);
        return () => {
          clearTimeout(timer);
        };
    });
    return(
        <div className="traffic-light__box">
            <Light color="red" isActive={activeColor === 0} />
            <Light color="yellow" isActive={activeColor === 1} />
            <Light color="green" isActive={activeColor === 2} />
        </div>
    )
}


export declare interface TrafficLightProps {
    initTurnOnLightNumber : number;
}

export default TrafficLight;