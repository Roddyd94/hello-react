import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "리액!트! ";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  // return <div>{name === "리액트" && <h1>Hello React!!</h1>}</div>;
  // return name || "undefined";
  return <div style={style}>{name}</div>;
}

export default App;
