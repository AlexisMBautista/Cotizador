import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
`;

const ResultCotizacion = styled.div`
  text-align: center;
  padding: .1rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextCotizacion = styled.p`
  color: #00838f;
  padding: .3rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ cotizacion }) => {
  if (cotizacion === 0) {
    return null;
  }

  return cotizacion === 0 ? (
    <Message>Elige marca, año, y tipo de seguro </Message>
  ) : (
    <ResultCotizacion>
      <TransitionGroup
        component="p"
        className="resultado"
      >
        <CSSTransition
          className="resultado"
          key={cotizacion}
          timeout={{enter: 500, exit: 500}}
        >
         <TextCotizacion>El total es: ${cotizacion}</TextCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultCotizacion>
  );
};

export default Result;
