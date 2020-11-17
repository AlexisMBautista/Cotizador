import { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <ContainerForm>
        <Form setResumen={setResumen} setLoading={setLoading} />
        {loading ? <Spinner /> : null}

        <Summary datos={datos} />

        {!loading ? <Result cotizacion={cotizacion} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
