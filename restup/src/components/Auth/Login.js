import React from "react";
import { Button, Form, Input, Typography, message, Divider } from 'antd';
import { Link } from 'react-router-dom'; // import Link
import { GoogleOutlined, FacebookFilled, TwitterOutlined } from '@ant-design/icons';
import '../Auth/login.css'



function Login() {
 
 
  const login = () => {
    message.success('Login successful!')
  }

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
                  onFinish={login}
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
  
                  <Button type="primary" htmlType="submit" block onClick={login}>Sign In</Button>

  
                  <Divider style={{ borderColor: "black" }}>
                    Or Login with
                  </Divider>
  
                  <div className="socialLogin">
                    <GoogleOutlined
                      className="socialIcon"
                      onClick={login}
                      style={{ color: "red" }}
                    />
                    <FacebookFilled
                      className="socialIcon"
                      onClick={login}
                      style={{ color: "blue" }}
                    />
                    <TwitterOutlined
                      className="socialIcon"
                      onClick={login}
                      style={{ color: "cyan" }}
                    />
                  </div>
  
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
