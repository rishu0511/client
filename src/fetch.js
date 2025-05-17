import React, { useState,useEffect,useRef,useCallback } from "react";
import axios from "axios";

const Apps = (props) => {
  // State to store the fetched data
  const [input, setinput] = useState({
    city: "Pratapgarh",
    state: "Utter Pradesh"});
  const[CITY,setcity]=useState('')
  const[ STATE,setstate]=useState('')
  const[weather_info,setweather] = useState([]);
  const [latitude, setlat] = useState(0);
  const [longitude, setlon] = useState(0);
  const [count, setCount] = useState(0);
  const [oprater,setoprater]=useState(false)
  const Data = useRef({})
  function handleChange(event) {
    const { name, value } = event.target;
    setinput((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  const Fetchdata = () => {
    fetch("http://localhost:8000/message")
    .then((res) => res.json())
    .then((data) => setweather(data.info))
    props.SETW(weather_info)
};
useEffect(() => {
  fetch("http://localhost:8000/getloc", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      City: input.city,
      State: input.state,
    })

  })
});
  // Function to fetch data using Axio
  // Call fetchData on component mount
  return (
    <div  class="FORM">
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
          <button class="Input"onClick={Fetchdata}>Search</button>
    </div>
  );
};

export default Apps;