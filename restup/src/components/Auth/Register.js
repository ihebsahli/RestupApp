import React, { useState, useEffect } from "react";
import { Button, Form, Input, Typography, Divider, Select } from 'antd';
import '../Auth/login.css'
import { Link } from 'react-router-dom'; // import Link
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export const Register = () => {
   // check if password and repeat password fields match
   const registerState = useSelector(state => state.newReducer.register)
   const dispatch = useDispatch();
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [role, setRole] = useState("");
   const [pass, setPass] = useState("");
   const [phone, setPhone] = useState("");

   const navigate = useNavigate();

  const handleAdduser = () => {
    const isValid = handleValidation();
    if (isValid) {
      dispatch(register(firstname, lastname, email, role, pass, phone));
      navigate(`/login`);

      // redirect to the list of reservations page
    }
  };
  useEffect(() => {
    if (registerState.loaded && registerState.data);
  }, [registerState])

  const handleValidation = () => {
    let isValid = true;
    if (email.trim() === "") {
      isValid = false;
      alert("Email field is required.");
    }
    if (pass.trim() === "") {
      isValid = false;
      alert("Password field is required.");
    }
    return isValid;
  };

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
      >
        <Typography.Title className='title'>SIGN UP</Typography.Title>
        <Form.Item
          label="First Name"
          name="myFirstName"
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <Input placeholder="Enter your First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}

          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="myLastName"
          rules={[{ required: true, message: 'Please input your Last Name!' }]}
        >
          <Input placeholder="Enter your Last Name"
           value={lastname}
           onChange={(e) => setLastname(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="myPhoneNumber"
          rules={[{ required: true, message: 'Please input your Phone Number!' }]}
        >
          <Input placeholder="Enter your Phone Number" addonBefore="+216" 
           value={phone}
           onChange={(e) => setPhone(e.target.value)}/>
        </Form.Item>
        <Form.Item
          label="Role"
          name="myRole"
          rules={[{ required: true, message: 'Please select your Role!' }]}
        >
          <Select placeholder="Select your Role"
           value={role}
           onChange={(e) => setRole(e)}>
            <Select.Option value="Serveur">Serveur</Select.Option>
            <Select.Option value="Livreur">Livreur</Select.Option>
            <Select.Option value="Client">Client</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Email"
          name="myEmail"
          rules={[{ required: true, type: "email", message: 'Please input your Email!' }]}
        >
          <Input placeholder="Enter your Email" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="myPassword"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Enter your Password" 
           value={pass}
           onChange={(e) => setPass(e.target.value)}/>
        </Form.Item>
        <Form.Item
          label="Repeat Password"
          name="myRepeatPassword"
          rules={[
            { required: true, message: 'Please repeat your Password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('myPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Passwords do not match');
              },
            }),
          ]}
        >
          <Input.Password placeholder="Repeat your Password" 
           value={pass}
           onChange={(e) => setPass(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit" block onClick={handleAdduser}>Sign Up</Button>
        <Divider style={{ borderColor: "black" }}>Or Login with</Divider>
        <div className="socialLogin">
        </div>
        {/* Add the Link component */}
        <div className="registerLink">
          <Link to="/login">Already have login and password? Sign in</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
