import { useContext, useState } from "react";
import Form from "../components/Form";
import { WeatherContext } from "../context/weatherContext";
import "./style.css";
import Weather from "../components/Weather";

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  const { weatherInfo, setWeatherInfo } = useContext(WeatherContext);

  return (
    <>
      <div className="homepage-header">
        <h1>Clima e Tempo</h1>
        <span>Consulte e compare informações meteorológicas</span>
      </div>

      <section>
        <div className="homepage-content">
          {loading !== false ? (
            <>
              <div className="circular"></div>
            </>
          ) : (
            <>
              {weatherInfo !== undefined ? (
                <div className="weather-infos-wrapper">
                  <Weather weatherInfo={weatherInfo} />

                  <div className="query-buttons">
                    <button onClick={() => setWeatherInfo(undefined)}>
                      Nova consulta
                    </button>
                    <button>Comparar clima</button>
                  </div>
                </div>
              ) : (
                <Form
                  setCurrentWeather={setWeatherInfo}
                  setLoading={setLoading}
                />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Homepage;
