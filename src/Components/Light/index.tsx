import "./Light.css";
const Light = (props:LightProps) => {
    return(
        <div
            className="light"
            style={{backgroundColor: props.color, opacity: props.isActive ? 1 : 0.4}}
        >
        </div>
    )
    
}


export declare interface LightProps {
    color : string;
    isActive: boolean;
}

export default Light;