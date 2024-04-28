import "./style.css";

const Thermometer = ({ value, type }) => {
  let tempClass = "";
  if ((value <= 15 && type == "temp") || (value <= 2 && type === "uv")) {
    tempClass = "temp-cold";
  } else if ((value <= 20 && type == "temp") || (value <= 4 && type === "uv")) {
    tempClass = "temp-cool";
  } else if ((value <= 25 && type == "temp") || (value <= 6 && type === "uv")) {
    tempClass = "temp-moderate";
  } else if ((value <= 30 && type == "temp") || (value <= 8 && type === "uv")) {
    tempClass = "temp-warm";
  } else if (
    (value <= 35 && type == "temp") ||
    (value <= 10 && type === "uv")
  ) {
    tempClass = "temp-hot";
  } else {
    tempClass = "temp-very-hot";
  }

  return (
    <div className="thermometer">
      <div
        className={`thermometer-fill ${tempClass} `}
        style={{
          width: `${
            type === "temp" ? (value / 40) * 100 : (value / 12) * 100
          }%`,
        }}
      ></div>
    </div>
  );
};

export default Thermometer;
