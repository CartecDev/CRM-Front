import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Reloj() {
  const h1 = useRef();

  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };

  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ti()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const fecha = hoy.toDateString();

  return (
    <RelojContainter className="reloj">
      <h1 ref={h1}>{ti()}</h1>
      <p>{fecha}</p>
    </RelojContainter>
  );
}

export const RelojContainter = styled.div`
  h1, p {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: larger;
    cursor: default;
  }
`;