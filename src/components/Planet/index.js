import React, { useState, useEffect } from "react";

import api from "~/services/api";

import {
  Container,
  Header,
  Content,
  Footer,
  Info,
  InfoList,
  Row,
  InfoMovies
} from "./styles";

export default function Planet() {
  const [planet, setPlanet] = useState({});
  const [films, setFilms] = useState([]);

  const getPlanet = () => {
    const idRandom = Math.floor(Math.random() * 61) + 1;

    api
      .get(`https://swapi.co/api/planets/${idRandom}/`)
      .then(function(response) {
        setPlanet(response.data);
        getFilms();
      });
  };

  const getFilms = () => {
    const urlFilms = planet.films;

    urlFilms.map(url => {
      api.get(`${url}`).then(function(response) {
        console.log(response.data);
        setFilms([...films, response.data]);
      });
    });

    console.log(films);
  };

  useEffect(() => {
    getPlanet();
  }, [getPlanet]);

  return (
    <Container>
      <Header>
        <h2>B2Wars - Planet Challenge</h2>
      </Header>
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

            <Info>
              <span>Climate</span>
              <div>
                <span>{planet.climate}</span>
              </div>
            </Info>

            <Info>
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

            <Info>
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
            <span>Featured in N films</span>
            <div>
              <ul>
                <li>Star wars 1</li>
                <li>Star wars 1</li>
                <li>Star wars 1</li>
                <li>Star wars 1</li>
                <li>Star wars 1</li>
              </ul>
            </div>
          </InfoMovies>
        </InfoList>
      </Content>
      <Footer>
        <button type="button">Next</button>
      </Footer>
    </Container>
  );
}
