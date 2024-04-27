import IconClouds from "./cloud";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";

const Icon = ({ name }) => {
  switch (name) {
    case "clouds":
      return <IconClouds />;
    case "logo":
      return <IconLogo />;
    case "github":
      return <IconGitHub />;
    case "linkedin":
      return <IconLinkedin />;
  }
};

export default Icon;
