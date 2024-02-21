import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    //#4837CF
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const rgbR = randomColorUtility(256);
    const rgbG = randomColorUtility(256);
    const rgbB = randomColorUtility(256);

    setColor(`rgb(${rgbR}, ${rgbG}, ${rgbB})`);
  }

  useEffect(() => {
    if (typeColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
