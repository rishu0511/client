import React from "react"
import { useRef, useEffect, useState } from "react";
export default function Canvascimg(props) {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context,props.IMG)

    context.font = "12px Arial";
    context.fillStyle = "black";
    context.fillText(props.DESC+": " + props.VAL +props.UNIT, 15, 155);
  });
  function draw(ctx,img_src) {
    ctx.clearRect(0, 0, 150, 150);
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 200, 180, 150, 0, 10, 130, 130);
    };
    img.src = img_src;
  }
  
  return <canvas ref={canvasRef} width={160} height={160} />;
}
                                                                              