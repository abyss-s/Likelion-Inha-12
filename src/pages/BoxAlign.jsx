import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const circleColorArr = [
  "pink",
  "red",
  "black",
  "gray",
  "green",
  "blue",
  "orange",
];

const BoxAlign = () => {
  return (
    <div>
      <Box boxColor="red" boxText="text1" />
      <Box boxColor="blue" boxText="text2" />
      <Box boxColor="green" boxText="text3" />
      <Box boxColor="pink" boxText="text4" />
      <ul>
        {circleColorArr.map((CircleOne) => (
          <Circle circleColor={CircleOne}></Circle>
        ))}
      </ul>
    </div>
  );
};

export default BoxAlign;
