import styled from "@emotion/styled";

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;


const Summary = ({ datos }) => {
  const { marca, plan, year } = datos;

  if (marca === "" || plan === "" || year === "") {
    return null;
  }

  return (
    <ContainerSummary>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Año del auto: {year}</li>
        <li>Plan: {plan}</li>
      </ul>
    </ContainerSummary>
  );
};

export default Summary;
