import Thermometer from "./Thermometer";
import "./style.css";

const Weather = ({ weatherInfo }) => {
  const { current, location } = weatherInfo;

  console.log(current, location);

  return (
    <>
      <div className="weather-container">
        <div className="weather-header">
          <img src={current.weather_icons[0]} alt="weather_icon" />

          <p>{current.weather_descriptions}</p>
        </div>

        <div className="weather-content">
          <div>
            <p>
              {location.name}, {location.region}, {location.country} -{" "}
              {current.temperature}&deg;
            </p>
          </div>

          <div className="feelslike-wrapper">
            <p>Sensação termica: {current.feelslike}&deg;</p>
            <Thermometer value={current.feelslike} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
