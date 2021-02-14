import React, { Component, useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Routes from '../Routes';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { CameraFeed } from '../components/camera-feed';
import ReactDOM from 'react-dom';
import { Widget } from "@uploadcare/react-widget";
import { useAuth0 } from "@auth0/auth0-react";


const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

};


export default function Medicine() {

    const { user, isAuth } = useAuth0(); 
    const imageUpload = async (uuidS) => {
        return axios.post('http://localhost:8351/api/v1/post/imageUpload', {
            uuid: uuidS,
            email:user.email
        })
            .then((data) => {
                 return JSON.stringify(data)
            
            }, (error) => {

            });

    }

    const [uuidKey, setUUID] = useState('')
    const [getData, setData] = useState('')

    const changeUUID = async (e) => {
        await setUUID(e.uuid)
        await imageUpload(e.uuid).then(userData => {
            setData(userData || "no data found");
        })
    }

    const changeData = (e) => {
    //    console.log(e)
        setData(e)
    }
    const APIKEY = '72fbc150c7fcf01b9ae9'
    const Example = () => (
        <Widget onChange={changeUUID} publicKey={APIKEY} clearable/>
    );
    return (
        <div style={{ margin: '80px 150px', width: '80%', flexDirection: 'col', display: 'flex' }}>
            <div>
            <Card style={{ height: '70%', width: '100%', flexDirection: 'col', display: 'flex' }}>
                <ListGroup >
                    <ListGroup.Item><h3>Upload your notes here</h3></ListGroup.Item>
                    <p style={{
                        position: 'realitive',
                        top: '15px',
                        right: '56px'
                    }}>
                        <Example />
                    </p>
                    
                    <p>
                        {getData}
                    </p>

                </ListGroup>
            </Card>
            </div>

        </div >


    );
}
