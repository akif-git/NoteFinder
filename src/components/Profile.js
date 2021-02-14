import React from 'react'
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import { Avatar } from '@material-ui/core';
import { Card, ListGroup } from 'react-bootstrap';

const Profile = () => {
    const { user,isAuthenticated } = useAuth0();

    return isAuthenticated && (
        <div>
            <Card border="light" style={{ width: '12rem'}}>
    <Card.Header b><Avatar position = 'absolute' alt  = {user.name} src = {user.picture}/></Card.Header>
    <Card.Body>
      <Card.Title>{user.nickname}</Card.Title>
    </Card.Body>
  </Card>
   
       </div>

    )

}

export default Profile;