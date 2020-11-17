import { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const ButtonCotizar = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.1s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = ({ setResumen, setLoading }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [mistake, setMistake] = useState(false);

  //extraer los valores del state
  const { marca, year, plan } = datos;

  //leer datos del formulario y colocarlos en el state
  const obtenerInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });

    setMistake(false);
  };

  //esta funcion cotiza el seguro
  const cotizarSeguro = (e) => {
    e.preventDefault();

    //validar
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setMistake(true);
      return;
    }

    let resultado = 2000;

    //obtener la diferencia en años
    const diferencia = obtenerDiferenciaYear(year);
    //por cada año hay que restar 3%
    resultado -= (resultado * (diferencia * 3)) / 100;
    //Americano 15%
    //Asiatico 5%
    //Europeo 30%
    resultado = calcularMarca(marca) * resultado;
    //Basico aumenta 20%
    //Completo aumenta 50%
    const incrementoPlan = calcularPlan(plan);
    //Total
    resultado = parseFloat(resultado * incrementoPlan).toFixed(2);
    //enviar datos al componente padre(APP)
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResumen({
        cotizacion: resultado,
        datos,
      });
    }, 2000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {mistake ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="Americano">Americano</option>
          <option value="Europeo">Europeo</option>
          <option value="Asiatico">Asiatico</option>
        </Select>
      </Field>

      <Field>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="Basico"
          checked={plan === "Basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="Completo"
          checked={plan === "Completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Field>

      <ButtonCotizar type="submit">Cotizar</ButtonCotizar>
    </form>
  );
};

export default Form;
