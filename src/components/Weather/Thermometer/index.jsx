import "./style.css";

const Thermometer = ({ value }) => {
  let tempClass = "";
  if (value <= 15) {
    tempClass = "temp-cold";
  } else if (value <= 20) {
    tempClass = "temp-cool";
  } else if (value <= 25) {
    tempClass = "temp-moderate";
  } else if (value <= 30) {
    tempClass = "temp-warm";
  } else if (value <= 35) {
    tempClass = "temp-hot";
  } else {
    tempClass = "temp-very-hot";
  }

  return (
    <div className="thermometer">
      <div
        className={`thermometer-fill ${tempClass} `}
        style={{ width: `${(value / 40) * 100}%` }}
      ></div>
    </div>
  );
};

export default Thermometer;
