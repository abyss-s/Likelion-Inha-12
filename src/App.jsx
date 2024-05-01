import BoxAlign from "./pages/BoxAlign";
import PlayGround from "./pages/PlayGround";
import SelectButtons from "./pages/SelectButtons";
import "./index.css";

function App() {
  return (
    <div
      style={{
        display: "flex",

        width: "100vw",
        height: "100vh",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {<BoxAlign />}
      {<SelectButtons />}
      {/* <PlayGround /> */}
    </div>
  );
}

export default App;
