import './styles.css';
import React, {useEffect, useState} from 'react';
import { Form, Input, Button, Checkbox, message} from 'antd';
import { useHistory } from "react-router-dom";
import * as axios from "axios";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function Login() {
    const history = useHistory();
    const [signed, setSigned] = useState(false);
    const codeButtonClicked = (data) => {
        console.log(data);

        axios.post(`${process.env.REACT_APP_API_URL}api/participants/get_participant_by_code/`, {
            code: data.code
        })
            .then(resp => {
                setSigned(true);
                console.log(resp);
                localStorage.setItem('id', resp.data.result.id);
                history.push('/participants');
            })
            .catch(error => message.error(error?.response?.data?.message || error.message))
    }

    const redirect = () => {
        if(signed === true){
            history.push('/participants')
        }
    }

  return (
      <div className={'background'}>
          <div className="background-image"/>
          <div className={'contentLogin'}>
              <div className={'title'}>New Year 20x21</div>
              <Form
                  {...layout}
                  className="basic"
                  initialValues={{ remember: true }}
                  onFinish={codeButtonClicked}
                  onFinishFailed={err => console.log(err)}
              >
                  <Form.Item
                      label={<label style={{ color: "whitesmoke", fontSize: 20}}>Твой код</label>}
                      name="code"
                      rules={[{ required: true, message: 'Введите код' }]}
                  >
                      <Input />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                      <Button type="primary" onClick={redirect} htmlType="submit" style={{ background: "red", borderColor: "red" }}>
                          Бадумц
                      </Button>
                  </Form.Item>
              </Form>
          </div>
          </div>


  );
}
