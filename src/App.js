import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [bg, setBg] = useState("yellow");

  return (
    <div style={{ background: bg, width: "100%", height: "100vh" }}>
      <div className="containter" style={{ background: bg }}>
        <button
          style={{ background: "red", border: "none" }}
          onClick={() => setBg("red")}
        >
          Red
        </button>
        <button
          style={{ background: "blue", border: "none" }}
          onClick={() => setBg("blue")}
        >
          Blue
        </button>
        <button
          style={{ background: "gray", border: "none" }}
          onClick={() => setBg("gray")}
        >
          Gray
        </button>
        <button
          style={{ background: "black", border: "none", color: "white" }}
          onClick={() => setBg("black")}
        >
          Black
        </button>
        <button
          style={{ background: "green", border: "none" }}
          onClick={() => setBg("green")}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default App;
