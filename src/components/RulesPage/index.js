import './styles.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {List, Typography, Divider, Button, Row, Col, Table} from 'antd';
import * as axios from "axios";
import WishlistBtn from "../WishlistButton";
import {CloseCircleOutlined} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

export default function Rules() {
    const history = useHistory();

    const [rules, setRules] = useState([]);
    const [presentReceiver, setPresentReceiver] = useState();
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Бюджет',
            dataIndex: 'budget',
            key: 'budget',
        },
    ];

    useEffect(() => {
        !localStorage.getItem('id') && history.push('/');
        axios.get(`${process.env.REACT_APP_API_URL}api/rules`)
            .then(resp => setRules(resp.data))
            .catch(error => console.log(error));
        axios.get(`${process.env.REACT_APP_API_URL}api/participants/${localStorage.getItem('id')}/get_present_receiver/`)
            .then(resp => setPresentReceiver(resp.data.result))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={'background'}>
            <div className={'background-image'}/>
            <div className={'content'}>
                <WishlistBtn/>
                <Title level={2} style={{ color: 'white', fontSize : 26}}>Итак, твой счастливчик - {presentReceiver && presentReceiver.fullname}</Title>
                <Row>
                    <Col span={12}>
                        <Title level={2} style={{ color: 'white', fontSize : 24}}>Правила тусы</Title>
                        <List
                            size="large"
                            bordered={false}
                            dataSource={rules}
                            renderItem={item => <List.Item style={{ color: 'white', fontSize : 20, float:'left'}}>{item.title}</List.Item>}
                        />
                    </Col>
                    <Col span={12}>
                        <Title level={2} style={{ color: 'white', fontSize : 24}}>Его вишлист</Title>
                        <Table pagination={false} columns={columns} dataSource={presentReceiver ? presentReceiver.wishlist : []} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
