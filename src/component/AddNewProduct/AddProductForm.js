import { Button, Form, Input, notification } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContext";
import "./AddProductForm.css";

export const AddProductForm = () => {
  const [form] = Form.useForm();
  const {addProduct, product } = useContext(ProductsContext);

  const navigate = new useNavigate();
  const [name, setName] = useState(null);
  const [cost, setCost] = useState(null);

  const handleSubmit = (value) => {
    addProduct([...product, value]);
    navigate("/productlist");
    notification.success({ message: "Product created succefully." });
  };

  return (
    <div className="p-3 newProduct">
          <Form onFinish={handleSubmit} form={form} layout="vertical">
            <Form.Item
              label="Product Name:"
              rules={[
                {
                  required: true,
                  message: "Please enter product name",
                  type: "string",
                },
              ]}
              name="productName"
            >
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="name"
              />
            </Form.Item>

            <Form.Item
              label="Price"
              name="cost"
              rules={[
                {
                  required: true,
                  message: "please! enter product price",
                },
              ]}
            >
              <Input
                type="number"
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                placeholder="cost price"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
};
