import React, { useState, useEffect, useRef,useCallback } from "react";
import axios from "axios";

const Apps = (props) => {
  // State to store the fetched data
  const [input, setinput] = useState({
    city: "Pratapgarh",
    state: "Utter Pradesh"})
  const [Data, setData] = useState([]);
  const[weather_info,setweather] = useState([]);
  const [latitude, setlat] = useState(0);
  const [longitude, setlon] = useState(0);
  const mainRef = useRef(null);
  function handleChange(event) {
    const { name, value } = event.target;
    setinput((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  // Function to fetch data using Axios
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input.city}&limit=5&appid=9d159926fb8c9e6cfd91f069d195f1fd`
      );
      setData(response.data);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };
  useEffect(() => {
    for (let i=0;i<Data.length;i++) {
      var loc_state = Data[i].state;
      if(loc_state === input.state){
        var user_loc= Data[i];
        
        setlat(user_loc.lat)
        setlon(user_loc.lon)
  
      }else{
        var user_loc= Data[0];
        
        setlat(user_loc.lat)
        setlon(user_loc.lon)
      }
    }
  })
  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: latitude,
        lon:longitude,
        appid:"9d159926fb8c9e6cfd91f069d195f1fd"
      }
    })
    .then(({ data }) => {if (mainRef.current) {
      setweather(data)
    }})
    .catch(console.warn)
    
  }, [latitude,longitude ])
  useEffect(() => {
    props.SETW(weather_info)
  },[weather_info]);
  
  // Call fetchData on component mount

  return (
    <div  ref={mainRef} class="FORM">

       <input
          class="Input"
          onChange={handleChange}
          name="city"
          placeholder="City..."
          value={input.city}
        />
        <input
          class="Input"
          onChange={handleChange}
          name="state"
          placeholder="State..."
          value={input.state}
        />

          <button class="Input"onClick={fetchdata}>Search</button>
    </div>
  );
};

export default Apps;