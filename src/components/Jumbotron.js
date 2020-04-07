import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled, { css } from "styled-components";
import chairs from "../assests/Tulip.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${chairs}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    min-height: 80vh;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  h1,
  p {
    text-align: center;
    color: #218c33;
  }
  strong {
    color: #fff;
  }
  button {
    margin: 2rem;
  }
  p {
    font-size: 1rem;
    color: #d1c9c9;
  }
  .container {
    padding: 3 rem;
    text-align: justify;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>
          WELCOME TO THE BEAUTIFUL <strong>FLOWER's</strong> WORLD
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s Lorem Ipsum has been the industry'
        </p>
        <div className="text-center">
          <button type="button" className="btn btn-success text-center">
            <stroke>SHOP</stroke>
          </button>
        </div>
      </Container>
    </Jumbo>
  </Styles>
);
