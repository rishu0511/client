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
      props.COUNT * 5
    );
    grad.addColorStop(0, "white");
    grad.addColorStop(1, "blue");

    // Fill rectangle with gradient
    context.fillStyle = grad;
    context.fillRect(1, 1, width - 20, 600);
    context.font = "20px Arial";
    context.fillStyle = "black";
    context.fillText(props.PLACE,250,80);
    context.fillText(props.TEMP+" °C",250,500);
    context.fillText(props.DESCRIPT,20,500);
  });

  return <canvas class ="rain" ref={canvasRef} width={Width-16} height={600} />;
}
