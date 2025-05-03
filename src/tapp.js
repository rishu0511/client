import { useState, useEffect, useRef } from "react";
import React from "react";
import Canvass from "./Canvas_s.js";
import Canvasc from "./canvas_c.js";
import Canvasf from "./canvas_f.js";
import Canvasr from "./canvas_r.js";
const delay = 0.03;
export default function Canvas(props) {
  const [counter, setCounter] = useState(100);
  const timer = useRef(null);
  const [sunny, setsunny] = useState(false);
  const [cloud, setcloud] = useState(false);
  const [fog, setfog] = useState(false);
  const [rain, setrain] = useState(false);
  // we can save timer in useRef and pass it to child
  useEffect(() => {
    // useRef value stored in .current property
    timer.current = setInterval(() => setCounter((v) => v + 0.2), delay * 1000);

    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  useEffect(() => {
    if (props.DESCRIPT === "Clear") {
      setrain(false)
      setfog(true);
      setcloud(false);
      setsunny(false);
    } else if (props.DESCRIPT === "Clouds") {
      setrain(false)
      setcloud(true);
      setfog(false);
      setsunny(false);
    } else if (props.DESCRIPT === "Rain") {
      setcloud(false);
      setfog(false);
      setsunny(false);
      setrain(true)
    }else {
      setrain(false)
      setsunny(true);
      setcloud(false);
      setfog(false);
    }
  });

  return (
    <div>
      <Child counter={counter} currentTimer={timer.current} />
      {sunny ? <Canvass COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> : null}
      {cloud ? <Canvasc COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> : null}
      {fog ? <Canvasf COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> : null}
      {rain? <div class = "rain_c"><Canvasr COUNT={counter} PLACE={props.PLACE} TEMP ={props.TEMP} DESCRIPT={props.DES}/> </div>: null}
    </div>
  );
}

function Child({ counter, currentTimer }) {
  // this will clearInterval in parent component after counter gets to 5
  useEffect(() => {
    if (counter < 500) return;

    clearInterval(currentTimer);
  }, [counter, currentTimer]);

  return null;
}
