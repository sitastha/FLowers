import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import styled, {css} from 'styled-components';

const Styles = styled.div`

.info {
  border: 1px solid #e03177;
  display:flex;
  border-radius:30px;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  height: 300px;
  width:300px;
  margin:10px;
}


`;


export function Information ({name,description}){
 return (
        <Styles>
            <div className="container">
                <div className="row">
                    <div className="col-lg col-md col-sm info" >
                        <h1>{name}</h1>
                        <h2>{description}</h2>
                    </div>
                </div>
            </div>
        </Styles>
    );
}
