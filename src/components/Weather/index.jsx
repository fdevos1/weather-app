import Icon from "../icons/icon";
import Thermometer from "./Thermometer";
import "./style.css";

const Weather = ({ weatherInfo }) => {
  const { current, location } = weatherInfo;

  const isDay =
    current.is_day === "yes" ? "title-text-day" : "title-text-night";

  const weatherItems = [
    {
      title: "Sensação térmica",
      icon: <Icon name="thermometer" />,
      content: `${current.feelslike}\u00B0`,
      component: <Thermometer type="temp" value={current.feelslike} />,
    },
    {
      title: "Índice UV",
      icon: <Icon name="uv" />,
      content: current.uv_index,
      component: <Thermometer type="uv" value={current.uv_index} />,
    },
    {
      title: "Umidade",
      icon: <Icon name="humidity" />,
      content: `${current.humidity}%`,
    },
    {
      title: "Nebulosidade",
      icon: <Icon name="cloud" />,
      content: `${current.cloudcover}%`,
    },
  ];

  return (
    <>
      <div
        className={`weather-container ${
          current.is_day === "yes" ? "isDayTime" : "isNightTime"
        }`}
      >
        <div className="weather-header">
          <img src={current.weather_icons[0]} alt="weather_icon" />

          <span className="weather-desc">{current.weather_descriptions}</span>
        </div>

        <div className="weather-content">
          <div className="weather-infos">
            <p className="weather-location">
              {location.name}, {location.region}, {location.country}
            </p>

            <p className="weather-temperature">{current.temperature}&deg;</p>
          </div>

          {weatherItems.map((item) => (
            <div className="wrapper">
              <div className="item-header">
                {item.icon}
                <p className={`item-title ${isDay}`}>{item.title}</p>
              </div>

              <span className="item-content">{item.content}</span>
              {item.component && item.component}
            </div>
          ))}

          <div className="wind wrapper">
            <div className="item-header">
              <Icon name="wind" />
              <p className={`item-title ${isDay}`}>Vento</p>
            </div>

            <div className="wind-content">
              <div className="wind-content-wrapper">
                <p className={`item-title ${isDay}`}>Velocidade do vento</p>
                <span className="item-content wind-content">
                  {current.wind_speed}Km/h
                </span>
              </div>
              <div className="wind-content-wrapper">
                <p className={`item-title ${isDay}`}>Direção do vento</p>
                <span className="item-content wind-content">
                  {current.wind_degree}&deg; - {current.wind_dir}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
