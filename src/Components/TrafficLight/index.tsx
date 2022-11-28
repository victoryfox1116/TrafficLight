import Light from "../Light";
import "./index.css";
import { LightColors } from "../../models/LightColors";

const TrafficLight = (props: TrafficLightProps) => {
  const { activeColor } = props;

  return (
    <div className="traffic-light__box">
      <Light color={LightColors.Red} isActive={activeColor === 0} />
      <Light color={LightColors.Yellow} isActive={activeColor === 1} />
      <Light color={LightColors.Green} isActive={activeColor === 2} />
    </div>
  );
};

export interface TrafficLightProps {
  activeColor: number;
}

export default TrafficLight;
