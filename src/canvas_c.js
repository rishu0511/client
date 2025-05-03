import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvasc(props) {
  const canvasRef = useRef(null);
  const [Width, setwidth] = useState(0);
  const [Height, setHeight] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const date = new Date();
    const milisec = date.getMilliseconds();
    const width = window.innerWidth;
    const height = window.innerHeight;
    setwidth(width);
    setHeight(height);
    const grad = context.createRadialGradient(200, 150, 30, 200, 150, 300);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(1, "darkblue");
    // Fill rectangle with gradient
    context.fillStyle = grad;
    context.fillRect(1, 1, width - 20, 600);
    if (canvasRef == null) return;
    drawStarr(width - 1300 + props.COUNT, 150, 20, 85, 3, "lightblue", context);
    drawStarr(
      width - 900 + props.COUNT / 6,
      200,
      35,
      65,
      3,
      "lightblue",
      context
    );
    drawStarr(width - 1200, 180, 40, 90, 3, "lightblue", context);
    drawStarr(
      width - 800,
      180 + props.COUNT / 3,
      50,
      50,
      3,
      "lightblue",
      context
    );
    drawStarr(width - 760, 400, 35, 55, 4, "lightblue", context);
    drawStarr(width - 1010, 230, 20, 95, 3, "lightblue", context);
    drawStarr(
      width - 900,
      400 - +props.COUNT / 2,
      50,
      70,
      3,
      "lightblue",
      context
    );
    context.font = "50px Arial";
    context.fillStyle = "skyblue";
    context.fillText(props.PLACE,900,80);
    context.fillText(props.TEMP+" °C",900,500);
    context.fillText(props.DESCRIPT,200,500);
  });
  function drawStarr(x, y, radius, radius_c, sides, fillColor, ctx) {
    var points = sides;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    for (let i = 0; i <= points + 1; i++) {
      var a = (Math.PI * i * 2) / points;
      ctx.arc(
        x + radius * Math.sin(a),
        y + radius * Math.cos(a),
        radius_c,
        0,
        2 * Math.PI
      );
    }
    ctx.closePath();
    if (fillColor) ctx.fill();
  }
  return <canvas ref={canvasRef} width={Width-16} height={600} />;
}