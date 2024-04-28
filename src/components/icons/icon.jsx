import IconClouds from "./cloud";
import IconGitHub from "./github";
import IconHumidity from "./humidity";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";
import IconThermometer from "./thermometer";
import IconUV from "./uv";
import IconWind from "./wind";

const Icon = ({ name }) => {
  switch (name) {
    case "cloud":
      return <IconClouds />;
    case "logo":
      return <IconLogo />;
    case "github":
      return <IconGitHub />;
    case "linkedin":
      return <IconLinkedin />;
    case "thermometer":
      return <IconThermometer />;
    case "uv":
      return <IconUV />;
    case "humidity":
      return <IconHumidity />;
    case "wind":
      return <IconWind />;
  }
};

export default Icon;
