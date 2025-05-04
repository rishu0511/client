import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvasimg(props) {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context,props.IMG)

    context.font = "15px 'Franklin Gothic Medium' ";
    context.fillStyle = "black";
    context.fillText(props.DESC+": " + props.VAL+ props.UNIT, 10, 163);
  });
  function draw(ctx,img_src) {
    ctx.clearRect(0, 0, 160, 175);
    ctx.fillStyle = "white";
    ctx.fill()
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 10, 0,150,150);
    };
    img.src = img_src;
  }
  
  return <canvas ref={canvasRef} width={160} height={175} />;
}
