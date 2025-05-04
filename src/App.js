import "./index.css";
import React, { useState } from "react";
import Apps from "./fetch.js";
import Canvas from "./tapp.js";
import Canvasb from "./box_can.js";
import Canvasimg from "./can_img.js";
import Canvascimg from "./can_cutimg.js";
import Clock from "./clock.js";
import CanvasReal from "./real_clock.js"; 
import Canvasr from "./canvas_r.js";
export default function App() {
    const [place, setplace] = useState("")
    const [lat,setlat] = useState(0)
    const [lon,setlon] = useState(0)
    const [weath,setweath] = useState(0)
    const [tem_max,setmax] = useState(0)
    const [tem_min,setmin] = useState('')
    const [visible,setvisible] = useState('')
    const [wind,setwind] = useState(0)
    const [gust,setgust] = useState(0)
    const [deg,setdeg] = useState(0)
    const [Air_p,setAirp] = useState(0)
    const [ground_l,setgrnd] = useState(0)
    const [slevel,setslevel] = useState(0)
    const[sunr,setsunrise] = useState(0)
    const[suns,setsunset] = useState(0)
    const [humid,sethumid] = useState(0)
    const [des,setdes] = useState([])
    const [desc,setdesc] = useState('')
    function set_weather(data){
        setplace(data.name)
        const tempe = Object.values(data)[3]
        const myJSON = JSON.stringify(data);
        const weathe = data.weather;
        setdes(data.weather);
        data.main ? setweath((data.main.temp-273)) :setweath(0) ;
        data.main ? setmax((data.main.temp_max-273)) : setmax(0) ;
        data.main ? setmin((data.main.temp_min-273)) : setmin(0);
        data.main ? setAirp(data.main.pressure): setAirp(0)
        data.main ? setgrnd(data.main.grnd_level): setgrnd(0)
        data.main ? setslevel(data.main.sea_level): setslevel(0)
        data.main ? sethumid(data.main.humidity): sethumid(0)
        data.wind ? setwind(data.wind.speed) : setwind(0)
        data.wind ? setgust(data.wind.gust) : setgust(0)
        data.wind ? setdeg(data.wind.deg) : setdeg(0)
        data.sys ? setsunrise(data.sys.sunrise) : setsunrise(1000) 
        data.sys ? setsunset(data.sys.sunset) : setsunset(1000)
        data.coord? setlat(data.coord.lat):setlat(0)
        data.coord? setlon(data.coord.lon):setlon(0)

        data.visibility? setvisible(data.visibility) : setvisible(0);
        data.weather?data.weather.map((element,index)=>{
            if(index===0){
                setdesc(element.main)
            }
        }):setdesc("Clear");
        const d = new Date(data.dt*1000);
        const date = d.toUTCString();
        const DDte= String(date);
        const now= new Date(DDte);
        const min = now.getMinutes();
        const hr = now.getHours() % 24;
        console.log(data)
        console.log(hr)
        console.log(min)
    }
    return(
    <div class="canvas">
        <Canvas  DESCRIPT={desc} PLACE={place} TEMP={Math.floor(weath)} DES={desc}/>
        <Apps SETW={set_weather}/>
        
        <Canvasb class="Box" TEM={tem_min} DES={"Min temprature"}/>
        <Canvasb TEM={tem_max} DES={"Max temprature"}/>
        <Canvasimg IMG={"./icons/visible.png"} DESC={"Visibility"} VAL={visible} X={50} UNIT= {" m"}/>
        <Canvasimg IMG={"./icons/air-pressure.png"} DESC={"Air pressure"} VAL={Air_p} X={10}  UNIT= {" Hpa"}/>
        <Canvasimg IMG={"./icons/wind-speed.png"} DESC={"Wind speed"} VAL={wind} X={10}  UNIT= {" m/s"}/>
        <Canvasimg IMG={"./icons/humid.png"} DESC={"Humidity"} VAL={humid} X={10}  UNIT= {" %"}/>
        <Canvasimg IMG={"./icons/groundlevel.png"} DESC={"Ground level"} VAL={ground_l} X={10}  UNIT= {" m"}/>
        <Canvascimg IMG={"./icons/wind-speed.png"} DESC={"Wind gust"} VAL={gust} X={10} UNIT= {" m/s"}/>
        <Clock NOW={sunr} DES={"Sunrise"} MRDN= {"AM"}/>
        <Clock NOW={suns} DES={"Sunset"} MRDN= {"PM"}/>
        <div class="bottom_box">
            <p class="para">Latitude : {lat}°</p>
            <p class="para">Longitude : {lon}°</p>
            <p class="para">Sea level : {slevel} meter</p>
            <p class="last_p">Wind flowing degree : {deg}°</p>
            <CanvasReal/>
        </div>
    </div>
)}