import "./Box.css";

const Box = (props) => {
  return (
    <div
      className="box"
      style={{
        backgroundColor: props.boxColor || "black",
      }}
    >
      <p>{props.boxText}</p>
    </div>
  );
};

export default Box;
