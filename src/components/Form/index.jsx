import { Formik } from "formik";

import Icon from "../icons/icon";
import { formValidation } from "../../helpers/schemaValidation";
import "./style.css";
import InputMask from "../InputMask/InputMask";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <Icon name="clouds" />
          <p>Hello World!</p>
        </div>

        <Formik
          initialValues={{ cep: "", city: "" }}
          validationSchema={formValidation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form>
              <div className="form-wrapper">
                <InputMask
                  placeholder="Insira o CEP desejado"
                  name="cep"
                  value={values.cep}
                  onChange={handleChange}
                />
                <p>Ou</p>
                <input
                  placeholder="A cidade desejada"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
              </div>
            </form>
          )}
        </Formik>

        <div>
          <button>Consultar</button>
        </div>
      </div>
    </>
  );
};

export default Form;
