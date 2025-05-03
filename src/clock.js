import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Clock(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.font = "12px Arial";
    context.fillStyle = "darkblue";
    clock(context,props.NOW);
    const d = new Date(props.NOW*1000);
    const date = d.toUTCString();
    const DDte= String(date);
    const now= new Date(DDte);
    const min = now.getMinutes();
    const hr = now.getHours() % 12;
    context.fillText(props.DES + " "+hr+":"+min +" "+props.MRDN, 10, 135);
  });
  function clock(ctx,DATE) {
    const d = new Date(DATE*1000);
    const date = d.toUTCString();
    const DDte= String(date);
    const now= new Date(DDte);
    ctx.save();
    ctx.clearRect(0, 0, 270, 250);
    ctx.translate(65, 60);
    ctx.scale(0.3, 0.3);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
  
    // Hour marks
    ctx.save();
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(110, 0);
      ctx.lineTo(130, 0);
      ctx.stroke();
    }
    ctx.restore();
  
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath();
        ctx.moveTo(127, 0);
        ctx.lineTo(130, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
  
    const sec = now.getSeconds();
    // To display a clock with a sweeping second hand, use:
    // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
    const min = now.getMinutes();
    const hr = now.getHours() % 12;
  
    ctx.fillStyle = "black";
  
    // Write image description
  
    // Write Hours
    ctx.save();
    ctx.rotate(
      (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
    );
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
  
    // Write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
  
    // Write seconds
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = "#325FA2";
    ctx.fillStyle = "#325FA2";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(115, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 14, 0, Math.PI * 2, true);

    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(0, 0, 6, 0, Math.PI * 2, true);
    
    ctx.fill();

    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 35;
    ctx.strokeStyle = "#325FA2";
    ctx.arc(0, 0, 160, 0, Math.PI * 2, true)
    ctx.stroke();
    ctx.restore();
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "darkblue";
    ctx.arc(65, 60, 43, 0, Math.PI * 2, true)
    ctx.stroke();
    ctx.restore();
  }
  
  return <canvas ref={canvasRef} width={150} height={250} />;
}
