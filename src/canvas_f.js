import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvass(props) {
  const canvasRef = useRef(null);
  const [Width, setwidth] = useState(0);
  const [Height, setHeight] = useState(0);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;
    setwidth(width);
    setHeight(height);
    const grad = context.createRadialGradient(
      200,
      150,
      40,
      200,
      150,
    250
    );
    grad.addColorStop(0, "white");
    grad.addColorStop(1, "blue");

    // Fill rectangle with gradient
    context.fillStyle = grad;
    context.fillRect(1, 1, width - 20, 600);
    context.font = "50px Arial";
    context.fillStyle = "black";
    context.fillText(props.PLACE,900,80);
    context.fillText(props.TEMP+" °C",900,500);
    context.fillText(props.DESCRIPT,200,500);
  });

  return <canvas ref={canvasRef} width={Width-16} height={600} />;
}
