/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import spinner from "~/assets/loading.gif";
import api from "~/services/api";

import {
  Container,
  Header,
  Content,
  Footer,
  Info,
  InfoList,
  Row,
  InfoMovies,
  Spinner
} from "./styles";

export default function Planet() {
  const [planet, setPlanet] = useState({});
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlanet = () => {
    setLoading(true);
    const idRandom = Math.floor(Math.random() * 61) + 1;

    api.get(`https://swapi.co/api/planets/${idRandom}/`).then(response => {
      setPlanet(response.data);
    });
  };

  useEffect(() => {
    getPlanet();
  }, []);

  useEffect(() => {
    const getFilms = async () => {
      setFilms([]);
      planet.films &&
        planet.films.map(async url => {
          const response = await api.get(`${url}`);

          setFilms([...films, response.data]);
        });
    };

    getFilms();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [planet]);

  const handleCalculateSize = word => {
    if (word) {
      const len = word.length;

      const size = len > 20 ? "16px" : len > 15 ? "20px" : "24px";

      return size;
    }
  };

  return (
    <Container>
      <Header>
        <h2>B2Wars - Planet Challenge</h2>
      </Header>

      {loading ? (
        <Spinner>
          <img alt="spinner" src={spinner}></img>
        </Spinner>
      ) : (
        <Content>
          <h1>{planet.name}</h1>
          <InfoList>
            <Row>
              <Info>
                <span>Population</span>
                <div>
                  <span>{planet.population}</span>
                </div>
              </Info>

              <Info size={handleCalculateSize(planet.climate)}>
                <span>Climate</span>
                <div>
                  <span>{planet.climate}</span>
                </div>
              </Info>

              <Info size={handleCalculateSize(planet.terrain)}>
                <span>Terrain</span>
                <div>
                  <span>{planet.terrain}</span>
                </div>
              </Info>
            </Row>

            <Row>
              <Info>
                <span>Diameter</span>
                <div>
                  <span>{planet.diameter}</span>
                  <sup>km</sup>
                </div>
              </Info>

              <Info size={handleCalculateSize(planet.gravity)}>
                <span>Gravity</span>
                <div>
                  <span>{planet.gravity}</span>
                </div>
              </Info>

              <Info>
                <span>Orbital period</span>
                <div>
                  <span>{planet.orbital_period}</span>
                  <sup>days</sup>
                </div>
              </Info>

              <Info>
                <span>Rotation period</span>
                <div>
                  <span>{planet.rotation_period}</span>
                  <sup>hours</sup>
                </div>
              </Info>
            </Row>

            <InfoMovies>
              <span>Featured in {films.length} films</span>
              <div>
                <ul>
                  {films &&
                    films.map(film => <li key={film.title}>{film.title}</li>)}
                </ul>
              </div>
            </InfoMovies>
          </InfoList>
        </Content>
      )}

      <Footer>
        <button onClick={() => getPlanet()} type="button">
          Next
        </button>
      </Footer>
    </Container>
  );
}
