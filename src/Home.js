import React from "react";
import styled, { css } from "styled-components";
import money from "./assests/money.jpg";

const Styles = styled.div`
  h2 {
  }
`;

export const Home = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <h2>We take flowers personally & we bring you happiness</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec.
          </p>
        </div>
        <div class="col">
          <img src={money} alt="money" height="300px" width="500px" />
        </div>
      </div>
    </div>
  );
};
