import { Button, Form, Input, notification } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";
import "./Login.css";

export const Login = () => {
  const navigate = new useNavigate();
  const {login} = useContext(ProductsContext);

  const onFinish = (values) => {
    login(true);
    navigate("/add");
    localStorage.setItem("userData",JSON.stringify(values.username));
    notification.success({ message: "Logged in succefully" });
  };

  return (
    <div className="row justify-content-center align-items-center loginMainSection">
      <div className="col-md-6 col-12">
        <div className="loginSection">
          <h1 className="text-center">Login</h1>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
