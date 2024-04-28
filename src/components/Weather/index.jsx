import Icon from "../icons/icon";
import Thermometer from "./Thermometer";
import "./style.css";

const Weather = ({ weatherInfo }) => {
  const { current, location } = weatherInfo;

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

  console.log(current, location);

  return (
    <>
      <div
        className={`weather-container ${
          current.is_day === "yes" ? "isDayTime" : "isNightTime"
        }`}
      >
        <div className="weather-header">
          <img src={current.weather_icons[0]} alt="weather_icon" />

          <p>{current.weather_descriptions}</p>
        </div>

        <div className="weather-content">
          <div className="weather-infos">
            <p>
              {location.name}, {location.region}, {location.country}
            </p>

            <p className="current-temperature">{current.temperature}&deg;</p>
          </div>

          {weatherItems.map((item) => (
            <div className="wrapper">
              <div className="item-header">
                {item.icon}
                <p className="item-title">{item.title}</p>
              </div>

              <p className="item-content">{item.content}</p>
              {item.component && item.component}
            </div>
          ))}

          <div className="wind wrapper">
            <div className="item-header">
              <Icon name="wind" />
              <p className="item-title">Vento</p>
            </div>

            <div className="wind-content">
              <div className="content-wrapper">
                <p className="item-title">Velocidade do vento:</p>
                <p className="wind-content">{current.wind_speed}Km/h</p>
              </div>
              <div className="content-wrapper">
                <p className="item-title">Direção do vento:</p>
                <p className="wind-content">
                  {current.wind_degree}&deg; - {current.wind_dir}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
