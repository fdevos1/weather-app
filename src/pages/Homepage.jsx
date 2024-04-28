import { useContext } from "react";
import Form from "../components/Form";
import { WeatherContext } from "../context/weatherContext";
import "./style.css";
import Weather from "../components/Weather";

const Homepage = () => {
  const { weatherInfo, setWeatherInfo } = useContext(WeatherContext);

  return (
    <>
      <div className="homepage-header">
        <h1>Clima e Tempo</h1>
        <span>Consulte e compare informações meteorológicas</span>
      </div>

      <section>
        <div>
          {weatherInfo !== undefined ? (
            <Weather weatherInfo={weatherInfo} />
          ) : (
            <></>
          )}
        </div>
        <Form setCurrentWeather={setWeatherInfo} />
      </section>
    </>
  );
};

export default Homepage;
