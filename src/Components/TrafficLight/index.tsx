import Light from "../Light";
import "./index.css";
import { LightColor } from "../../models/LightColor";
import { LightNumber } from "../../models/LightNumber";

const TrafficLight = (props: { activeColor: number }) => {
  const { activeColor } = props;

  return (
    <div className="traffic-light__box">
      <Light
        color={LightColor.Red}
        isActive={activeColor === LightNumber.Red}
      />
      <Light
        color={LightColor.Yellow}
        isActive={activeColor === LightNumber.Yellow}
      />
      <Light
        color={LightColor.Green}
        isActive={activeColor === LightNumber.Green}
      />
    </div>
  );
};

export default TrafficLight;
