import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import TextField from '@material-ui/core/TextField';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/loginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';
import ImgMediaCard from "../components/ViewImages";
import { Card, ListGroup } from 'react-bootstrap';

const axios = require('axios');

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '', images:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    var resp;
    var that = this;


    const { user } = this.props.auth0;

    axios.post("http://localhost:8351/api/v1/post/searchDb", {
      email: user.email, 
      description: this.state.value
    }).then(function (response) {
      that.setState({ value: '', images: response.data });
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="Home">
        <div><Profile/></div>
            <div> <LoginButton/> <LogoutButton/> </div>
            <div><ImgMediaCard elements={ this.state.images } /></div>
        <ListGroup.Item style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
            <form onSubmit = { this.handleSubmit }>
              <TextField onChange = { this.handleChange } value={this.state.value} name = "query"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                  <input type="hidden" name="logged" />

                  <div><Button variant="primary"  size="large"type="submit">Search Notes for a topic!</Button></div> 
                        </form>
           </ListGroup.Item>
      </div>
    );
  }
}

export default withAuth0(Home);
