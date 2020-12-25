import './styles.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {List, Typography, Divider, Button} from 'antd';
import * as axios from "axios";
import {useHistory} from "react-router-dom";
import WishlistBtn from "../WishlistButton";

export default function Participant() {
    const history = useHistory();

    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/participants/`)
            .then((resp) => {
            const allParticipants = resp.data;
            setParticipants(allParticipants);
        });
    }, []);

  return (
      <div className={'background'}>
        <div className={'background-image'}/>
        <div className={'content'}>
        <Divider orientation="center" style={{ color: 'white', fontSize : 26 }}>Участники</Divider>
        <List
            size="large"
            bordered={false}
            dataSource={participants}
            renderItem={item => <List.Item style={{ color: 'white', fontSize : 20}}>{item.fullname}</List.Item>}
        />
          <Button type="primary" htmlType="submit" style={{ background: "red", borderColor: "red"}}
          onClick={ () => history.push('/wishlist')}>
            Бадумц
          </Button>
            <WishlistBtn/>
        </div>
      </div>
  );
}
