import React from "react"
import { useRef, useEffect, useState } from "react";
export default function CanvasReal(props) {
  const canvasRef = useRef(null);
  useEffect(() => {
    // On the first render, canvas won't be set. However, once setCanvas is called by ref, this effect will run again.
    if (canvasRef == null) return;

    function clock() {
        const now = new Date();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.save();
        ctx.clearRect(0, 0, 150, 150);
        ctx.translate(135, 50);
        ctx.scale(0.3, 0.3);
        ctx.rotate(-Math.PI / 2);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.fillStyle ="white"
        ctx.fill()
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
      
        // Hour marks
        ctx.save();
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          ctx.rotate(Math.PI / 6);
          ctx.moveTo(100, 0);
          ctx.lineTo(120, 0);
          ctx.stroke();
        }
        ctx.restore();
      
        // Minute marks
        ctx.save();
        ctx.lineWidth = 5;
        for (let i = 0; i < 60; i++) {
          if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
          }
          ctx.rotate(Math.PI / 30);
        }
        ctx.restore();
      
        const sec = now.getSeconds();
        const milisec = now.getMilliseconds();
        // To display a clock with a sweeping second hand, use:
        // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
        const min = now.getMinutes();
        const hr = now.getHours() % 12;
        ctx.fillStyle = "black";
      
        // Write image description
        canvas.innerText = `The time is: ${hr}:${min}`;
      
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
        ctx.lineWidth = 10;
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
        ctx.lineTo(105, 0);
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
        ctx.lineWidth = 34;
        ctx.strokeStyle = "blue";
        ctx.arc(0, 0, 150, 0, Math.PI * 2, true);
        ctx.stroke();
      
        ctx.restore();
        window.requestAnimationFrame(clock);
      }
      
      window.requestAnimationFrame(clock);
      
  }, [canvasRef]);

  return <canvas ref={canvasRef} width={270} height={160} />;
}
