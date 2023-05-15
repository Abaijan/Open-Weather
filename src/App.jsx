import { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const GetWather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=145b5e7ac02aff1869014850dc5444a9&q=${city},`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
  };
  const searchHandler = (e) => {
    setCity(e.target.value);
  };



  return (
    <div >
      <div className="container">
        <div className="inner">
          <div className="form">
            <input className='input' type="text" onChange={searchHandler} />
            <button className='btn' onClick={GetWather}>Search Weather</button>
          </div>
          <p className='city'>City: {weather?.name}</p>
          <p className='country'>country:{weather?.sys.country}</p>
          <p className='temp'>Temp:{weather?.main.temp_max}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
