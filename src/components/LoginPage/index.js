import './styles.css';
import React, {useEffect, useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function LoginPage() {
    const history = useHistory();
    const codeButtonClicked = (data) => {
        console.log(data.code);
        history.push('/participants');
    }

  return (
      <div >
        <div>New Year 2021</div>
          <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={codeButtonClicked}
              onFinishFailed={err => console.log(err)}
          >
              <Form.Item
                  label="Code"
                  name="code"
                  rules={[{ required: true, message: 'Please input your code!' }]}
              >
                  <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
          </Form>
      </div>

  );
}
