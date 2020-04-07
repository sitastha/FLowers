import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";

const Styles = styled.div`
  img:hover {
    opacity: 0.5;
    filter: alpha(opacity=50);
    cursor: pointer;
  }
  .flower {
    background: #d6cfd4;
    margin: 1rem 0;
    border-radius: 0.8rem;
    padding: 0;
    position: relative;
    font-size: 2 rem;
    display: inline-block;
  }
  .flower img {
    width: 100%;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    display: block;
    position: relative;
  }
  .fa-window-close {
    top: 4%;
    position: absolute;
    color: white;
    margin-right: 10px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  }
  .fa-caret-square-down {
    color: green;
  }
  .flower-info h3 {
    font-size: 2rem;
    color: #265c0b;
  }
  .flower-info {
    padding: 1rem 0.9rem;

    h3.flower-info {
      color: #fff;
    }
  }
  .row {
    padding: 5px;
  }
`;

export default class Flower extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, img, name, info, price } = this.props.flower;
    const { removeFlower } = this.props;
    return (
      <Styles>
        <Fragment>
          <div className="container">
            <div className="row">
              <div className="col-lg col-md col-sm flower">
                <img src={img} alt="flower" height="250vh" width="100vw" />
                <span className="close-btn" onClick={() => {
                  removeFlower(id);
                }}>
                  <i className="fas fa-window-close" />
                </span>
                
                <div className="flower-info">
                  <h3>{name}</h3>
                  <h4>{price}</h4>
                  <h5> info{""}</h5>
                  <span onClick={this.handleInfo}>
                    <i class="fas fa-caret-square-down" />
                  </span>
                  {this.state.showInfo && <p>{info}</p>}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </Styles>
    );
  }
}
