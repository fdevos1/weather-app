import Icon from "../icons/icon";
import "./style.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="actions"></div>

          <div className="logo">
            <Icon name="logo" />
          </div>

          <div></div>
        </div>
      </header>
    </>
  );
};

export default Header;
