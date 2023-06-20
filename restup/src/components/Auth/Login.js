import React, { useEffect } from "react";
import { Button, Form, Input, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom'; // import Link
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actionCreator";
import '../Auth/login.css'

function Login() {
  const isLoggedIn = useSelector(state => state.newReducer.login)
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const validate = () => {
    dispatch(login({
      email: form.getFieldValue('myEmail'),
      password: form.getFieldValue('myPassword')
    }))
  }

  useEffect(() => {
    console.log(isLoggedIn);
    if(isLoggedIn.loaded === true && isLoggedIn.data)
    navigate("/reservationList");// eslint-disable-next-line
  }, [isLoggedIn]) 

  return (

    <div className="appBg">
      <Form
        className="loginForm"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={validate}
        form={form}
      >
        <Typography.Title className="title">SIGN IN</Typography.Title>
        <Form.Item
          label="Email"
          name="myEmail"

          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your Email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="myPassword"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter your Password"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block onClick={validate}>Sign In</Button>


        <Divider style={{ borderColor: "black" }}>
          Or Login with
        </Divider>

        {/* Add the Link component */}
        <div className="registerLink">
          <Link to="/register">
            Don't have an account? Register now!
          </Link>
        </div>
      </Form>
    </div>


  );
}

export default Login;
