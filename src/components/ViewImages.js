import React, { Component } from 'react';
import { Card, Jumbotron, Button } from 'react-bootstrap';
import {useAuth0} from "@auth0/auth0-react";

class ImgMediaCard extends Component {
    render(){
  return (
    <div>
    { this.props.elements.length > 0 &&
      <Jumbotron>
    <div class="card-group" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
      {this.props.elements.map((value, index) => {
          return (
        <Card style={{ width: '5rem' }}>
          <a target="_blank" href={value}>
        <Card.Img variant="top" src={value}/>
        </a>
        </Card> )
          })}
          </div>
    </Jumbotron>
    }
    </div>
  );
}}

export default ImgMediaCard