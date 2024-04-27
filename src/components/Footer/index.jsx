import Icon from "../icons/icon";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <a href="https://github.com/fdevos1" target="_blank">
            <Icon name="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-devos-5540ab195/"
            target="_blank"
          >
            <Icon name="linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
