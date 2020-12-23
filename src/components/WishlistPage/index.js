import './styles.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";
import {List, Typography, Divider, Button, Table, Tag, Space, Form, Input} from 'antd';
import * as axios from "axios";

import {
    CloseCircleOutlined
} from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function Wishlist() {
    const history = useHistory();

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        !localStorage.getItem('id') && history.push('/');
        axios.get(`${process.env.REACT_APP_API_URL}api/participants/${localStorage.getItem('id')}/`)
            .then(resp => {
                setWishlist(resp.data.wishlist)
            })
            .catch(error => console.log(error))
    }, []);

    const deleteWishClicked = (id) => {
        setWishlist(wishlist.filter(wish => wish.id !== id));
        axios.delete(`${process.env.REACT_APP_API_URL}api/wishes/${id}`)
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

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
        {
            title: 'Удалить',
            dataIndex: 'id',
            key: 'id',
            render: (id) => (
                    <CloseCircleOutlined style={{fontSize:30, paddingLeft:20}}
                                         onClick={() => deleteWishClicked(id)} />
            ),
        },
    ];



    const addWishClicked = ({name, budget}) => {
        axios.post(`${process.env.REACT_APP_API_URL}api/wishes/`, {
            name,
            budget,
            owner : localStorage.getItem('id')
        })
            .then(resp => resp.data)
            .then(resp =>{
                console.log(resp)
                setWishlist([...wishlist, resp])
            })
            .catch(error => console.log(error))
    }


  return (
      <div className={'background'}>
        <div className={'background-image'}/>
        <div className={'content'}>
            <Title level={2} style={{color:"whitesmoke"}}>Вишлист</Title>
            <Form
                {...layout}
                className="basic"
                initialValues={{ remember: true }}
                onFinish={addWishClicked}
                onFinishFailed={err => console.log(err)}
            >
                <Form.Item
                    label={<label style={{ color: "whitesmoke", fontSize: 20}}>Бюджет</label>}
                    name="budget"
                    rules={[{ required: false}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={<label style={{ color: "whitesmoke", fontSize: 20}}>Название</label>}
                    name="name"
                    rules={[{ required: true, message: 'Введите название' }]}
                >
                    <TextArea />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{ background: "red", borderColor: "red" }}>
                        Бадумц
                    </Button>
                </Form.Item>
            </Form>
            <Table pagination={false} columns={columns} dataSource={wishlist} />
        </div>
      </div>
  );
}
