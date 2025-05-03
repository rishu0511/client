import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvasimg(props) {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context,props.IMG)

    context.font = "12px Arial";
    context.fillStyle = "darkblue";
    context.fillText(props.DESC+": " + props.VAL+ props.UNIT, 15, 140);
  });
  function draw(ctx,img_src) {
    ctx.clearRect(0, 0, 250, 250);
    ctx.fillStyle = "white";
    ctx.fill()
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 20, 20,100,100);
    };
    img.src = img_src;
  }
  
  return <canvas ref={canvasRef} width={150} height={150} />;
}
