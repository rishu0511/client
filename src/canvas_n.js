import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvas(props) {
  const canvasRef = useRef(null);
  const [Width, setwidth] = useState(0);
  const [Height, setHeight] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = window.innerWidth
    setwidth(width)
    console.log("searh");
    const grad = context.createRadialGradient(200, 150, 30, 200, 150, 100);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(1, "darkblue");

    // Fill rectangle with gradient
    context.fillStyle = grad;
    context.fillRect(1, 1, 1300, 600);
    drawStar(900, 100, 5, 6, "white", context);
    drawStar(1300, 170, 7, 5, "white", context);
    drawStar(1000, 150, 4, 7, "white", context);
    drawStar( 700, 30, 7, 5, "white", context);
    drawStar(500, 250, 6, 5, "white", context);
    drawStar( 330, 350, 7, 9, "white", context);
    drawStar(200, 432, 7, 5, "white", context);
    drawStar(900, 550, 6, 5, "white", context);
    drawStar(100, 550, 7, 9, "white", context);
  });
  function drawStar(x, y, radius, sides, fillColor, ctx) {
    var points = sides || 5;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    for (let i = 0; i < 2 * points + 1; i++) {
      var r = i % 2 == 0 ? radius : radius / 2;
      var a = (Math.PI * i) / points;
      ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
    }
    ctx.closePath();
    if (fillColor) ctx.fill();
  }

  return <canvas ref={canvasRef} width={Width} height={600} />;
}
