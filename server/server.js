import axios from "axios"
import express from "express"
import cors from "cors"
import { useState } from "react";
const app = express();
app.use(cors());
app.use(express.json());
let lati = 0;
let longi  = 0;
var Data = [];
var weatherdata ={}
app.get("/message", (req, res) => {

  res.json({info:weatherdata});
});
app.post("/getloc",async(req,res)=>{
  const City = req.body.City
  console.log(City)
  await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct?", {
      params: {
        q:City,
        limit:5,
        appid:"9d159926fb8c9e6cfd91f069d195f1fd"
      }
    }
  ).then(({ data }) => {
    Data=data
  })
  .catch(console.warn);
  for (let i=0;i<Data.length;i++) {
    var loc_state = Data[i].state;
    if(loc_state === req.body.State){
      var user_loc= Data[i];
      
      lati=user_loc.lat
      longi=user_loc.lon

    }else{
      var user_loc= Data[0];
      
      lati=user_loc.lat
      longi=user_loc.lon
    }
  }
  await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: lati,
          lon:longi,
          appid:"9d159926fb8c9e6cfd91f069d195f1fd"
        }
      })
      .then(({ data }) => {
        weatherdata=data
      })
      .catch(console.warn)
  res.json({info:weatherdata});
})
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});