import Icon from "../icons/icon";
import "./style.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <Icon name="clouds" />
          <p>Hello World!</p>
        </div>

        <div className="form-wrapper">
          <input placeholder="Insira a cidade desejada" />
          <input placeholder="Insira o CEP desejado" />
        </div>

        <div>
          <button>Consultar</button>
        </div>
      </div>
    </>
  );
};

export default Form;
