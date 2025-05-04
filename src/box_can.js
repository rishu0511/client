import React from "react";
import { useRef, useEffect, useState } from "react";
export default function Canvasb(props) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fill()
    clock(context,props.TEM);
    context.font = "14px 'Arial Narrow Bold' ";
    context.fillStyle = "black";
    context.fillText(props.DES+": " + Math.floor(props.TEM )+"° C" , 0, 175);
  });
  function clock(ctx,temp) {
    ctx.save();
    ctx.clearRect(0, 0, 170, 178);
    ctx.translate(83, 82);
    ctx.scale(0.45, 0.45);
    ctx.rotate(Math.PI / 1.32);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    // Hour marks
    ctx.save();
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 2);
      ctx.strokeStyle = "#325FA2";
      if (i === 2) {
        ctx.arc(190, 0, 25, 0, Math.PI * 2, true);
        ctx.fillStyle = "#325FA2";
        ctx.fill();
      } else if (i === 3) {
        ctx.arc(190, 0, 25, 0, Math.PI * 2, true);
        ctx.fillStyle = "#325FA2";
        ctx.fill();
      }
      ctx.moveTo(110, 0);
      ctx.lineTo(140, 0);

      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      if (i === 3) {
        ctx.fillText(-1 * 50 + "°C", 90, -10);
      } else {
        ctx.fillText(i * 50 + "°C", 70, -10);
      }

      ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (let i = 0; i < 75; i++) {
      if (i % 25 !== 0) {
        ctx.beginPath();
        ctx.moveTo(130, 0);
        ctx.lineTo(140, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 50);
    }
    ctx.restore();
    const t = temp;
    ctx.fillStyle = "black";

    // Write image description

    // Write Hours
    ctx.save();
    ctx.rotate((Math.PI / 100) * t);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.strokeStyle = "#325FA2";
    ctx.arc(-10, -5, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#325FA2";
    ctx.fill();
    ctx.moveTo(-10, -5);
    ctx.lineTo(0, 90);
    ctx.stroke();
    ctx.restore();
    // Write Minutes

    ctx.beginPath();
    ctx.lineWidth = 34;
    ctx.strokeStyle = "#325FA2";
    ctx.arc(0, 0, 165, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();
  }

  return <canvas ref={canvasRef} width={170} height={178} />;
}
