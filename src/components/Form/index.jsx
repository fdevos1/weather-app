import { useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";

import InputMask from "../InputMask";
import Icon from "../icons/icon";

import handleCityQuery from "../../helpers/cityQuery";
import { formValidation } from "../../helpers/schemaValidation";

import "./style.css";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState([]);

  const formikProps = useFormik({
    initialValues: {
      cep: "",
      city: "",
    },
    onSubmit: async (data) => {
      const { city } = data;

      setLoading(true);

      try {
        const cityQuery = await handleCityQuery({ city });
        setCurrentWeather(cityQuery);
        setTimeout(() => setLoading(false), 600);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    },
    validationSchema: formValidation,
  });

  const handleBlurOnCEP = async (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, "");

    try {
      await formValidation.validateAt("cep", { cep: value });

      const fetchCity = await axios.get(
        `http://viacep.com.br/ws/${value}/json/`
      );

      const { data } = fetchCity;
      formikProps.setFieldValue("city", data.localidade);
    } catch (err) {
      console.error("CEP Inválido", err.message);
    }
  };

  console.log(loading);
  console.log(currentWeather);

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <Icon name="clouds" />
          <p>Hello World!</p>
        </div>

        <div>
          <p>Resposta consulta</p>
        </div>

        <form onSubmit={formikProps.handleSubmit}>
          <div className="form-wrapper">
            <div className="input-wrapper">
              <InputMask
                placeholder="Insira o CEP desejado"
                name="cep"
                value={formikProps.values.cep}
                onChange={formikProps.handleChange}
                onBlur={handleBlurOnCEP}
              />
              <p>Ou</p>
              <input
                placeholder="A cidade desejada"
                name="city"
                value={formikProps.values.city}
                onChange={formikProps.handleChange}
              />
            </div>
            <div className="submit-wrapper">
              {loading ? (
                <div className="circular"></div>
              ) : (
                <button type="submit">Consultar</button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
