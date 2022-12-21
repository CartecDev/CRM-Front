import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import styled from 'styled-components';

export default function Tiempo() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [tiempo, setTiempo] = useState();
  const [temperatura, setTemperatura] = useState();

  useEffect(() => {
    getGeo();
  }, [lat, lon])

  async function success(position) {
    var coordenadas = position.coords;

    setLat(coordenadas.latitude.toFixed(2));
    setLon(coordenadas.longitude.toFixed(2));
  };

  const getGeo = async () => {
    await navigator.geolocation.getCurrentPosition(success);
    const urlWth = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8c1a23d7f01c19e27a8a782cb86cda1`;
    await axios.get(urlWth)
      .then(res => setTiempo(res.data))
      .then(res => console.log(res.data));
    await setTemperatura(tiempo.main)
  }

  return (
    <div>
      <p>{tiempo ? (
        <Weather>
          <Row>
            <IoLocationSharp />{tiempo.name}
          </Row>
          <Row>
            {(tiempo.main.temp - 273).toFixed(2)} ºC
          </Row>
        </Weather>
      ) : ''}</p>
    </div>
  )
}

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;