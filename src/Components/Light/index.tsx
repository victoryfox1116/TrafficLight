import "./index.css";
const Light = (props: { color: string; isActive: boolean }) => {
  return (
    <div
      className="light"
      style={{
        backgroundColor: props.color,
        opacity: props.isActive ? 1 : 0.4,
      }}
    ></div>
  );
};

export default Light;
