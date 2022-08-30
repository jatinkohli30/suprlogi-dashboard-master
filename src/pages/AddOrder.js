/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

import {
  Row,
  Col,
  Card,
  List,
  Descriptions,
  Avatar,
  Switch,
  Upload,
  message,
  Layout,
  Menu,
  Typography,
  Form,
  Input,
  Checkbox,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import { Radio } from "antd";
import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-1.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";
import { DatePicker, Space } from "antd";
import { Button } from "antd";

import { Collapse } from "antd";
import React from "react";
import { StyleSheetManager } from "styled-components";
function AddOrder() {
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    
  };
  const { Panel }= Collapse;

  return (
    <>
      {/* <Card> */}
      {/* **************************** DETAILS OF BUYER *********************** */}

      <Collapse accordion className="mb-24">
        <Panel header="Buyer Details" key="1">
          <h3>Buyer Details</h3>
          {
            <Form.Item
              name="First Name"
              rules={[
                { required: true, message: "Please input your firstname!" },
              ]}
            >
              <Input placeholder="First Name*" />
            </Form.Item>
          }
          <Form.Item
            name="Last Name"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input placeholder="Last Name*" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="email*" />
          </Form.Item>
          <Form.Item
            name="phone number"
            rules={[
              { required: true, message: "Please input your Phone number!" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="Address Line 1"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Address Line 1*" />
          </Form.Item>
          <Form.Item
            name="Address Line 2"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Address Line 2" />
          </Form.Item>
          <Form.Item
            name="Pincode"
            rules={[{ required: true, message: "Please input your pincode!" }]}
          >
            <Input placeholder="Pincode*" />
          </Form.Item>
          <Form.Item
            name="City"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input placeholder="City*" />
          </Form.Item>
          <Form.Item
            name="State"
            rules={[{ required: true, message: "State" }]}
          >
            <Input placeholder="State*" />
          </Form.Item>
          <Form.Item
            name="Country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input placeholder="Country*" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Password*" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox onChange={onChange}></Checkbox>
              {" "}I agree the {" "}
              <a href="#pablo" className="font-bold text-dark">
                Terms and Conditions
              </a>
            {/* </Checkbox> */}
          </Form.Item>
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <Button type="primary" size="large">Submit</Button></div>
        </Panel>
      </Collapse>



      {/* **************************** DETAILS OF ORDER *********************** */}

      <Collapse accordion className="mb-24">
        <Panel header="Order Details" key="2">
          <h3>Order Details</h3>

          <Form.Item
            name="Order ID"
            rules={[{ required: true, message: "Please input your order id!" }]}
          >
            <Input placeholder="Order ID*" />
          </Form.Item>
          <Form.Item
            name="Order date"
            rules={[
              { required: true, message: "Please input your order date!" },
            ]}
          >
            {" "}
            <Space direction="vertical" size={20}>
              <DatePicker onChange={onChange} />
            </Space>
          </Form.Item>
          <Form.Item
            name="Order Channel"
            rules={[
              { required: true, message: "Please input your order channel" },
            ]}
          >
            <Input placeholder="Order Channel*" />
          </Form.Item>
          <Form.Item
            name="Order Type"
            rules={[
              { required: true, message: "Please input your order type!" },
            ]}
          >
            <Input placeholder="Order Type*" />
          </Form.Item>
          <Form.Item
            name="HSN"
            rules={[{ required: true, message: "Please input your HSN!" }]}
          >
            <Input placeholder="HSN*" />
          </Form.Item>
          <Form.Item
            name="Discount (optional)"
          >
            <Input placeholder="Discount (Optional)" />
          </Form.Item>
          <Form.Item
            name="Product Category"
            rules={[
              {
                required: true,
                message: "Please input your product category!",
              },
            ]}
          >
            <Input placeholder="Product Category*" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <Button type="primary" size="large">Submit</Button></div>

          {/* **************************** DETAILS OF PRODUCT *********************** */}


          
          <h3>Product Details</h3>
          <Form.Item
            name="Product Name"
            rules={[{ required: true, message: "Please input your Product Name!" }]}
          >
            <Input placeholder="Product Name*" />
          </Form.Item>
          <Form.Item
            name="SKU"
            rules={[
              { required: true, message: "Please input your SKU!" },
            ]}
          >
            <Input placeholder="SKU*" />
          </Form.Item>
          <Form.Item
            name="Quantity"
            rules={[
              { required: true, message: "Please input your Quantity" },
            ]}
          >
            <Input placeholder="Quantity*" />
          </Form.Item>
          <Form.Item
            name="Unit Price"
            rules={[
              { required: true, message: "Please input Unit Price!" },
            ]}
          >
            <Input placeholder="Unit Price*" />
          </Form.Item>
          <Form.Item
            name="Taxe Rate"
            rules={[
              { required: true, message: "Please input your Taxe Rate" }]}
          >
            <Input placeholder="Taxe Rate*" />
          </Form.Item>
          <Form.Item
            name="HSN"
            rules={[
              { required: true, message: "Please input your HSN!" }]}
          >
            <Input placeholder="HSN*" />
            <h4>Dont know your HSN Code? <a href="">Click Here</a></h4>
          </Form.Item>
          <Form.Item
            name="Discount (optional)"
          >
            <Input placeholder="Discount (Optional)" />
          </Form.Item>
          <Form.Item
            name="Product Category"
            rules={[
              {
                required: true,
                message: "Please input your product category!",
              },
            ]}
          >
            <Input placeholder="Product Category*" />
          </Form.Item>

          {/* </Panel>
      </Collapse> */}

          <h3>Payments</h3>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Cash on Delivery</Radio>
            <Radio value={2}>Prepaid</Radio>
          </Radio.Group>
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <Button type="primary" size="large">Submit</Button></div>
        </Panel>
      </Collapse>

      {/* **************************** DETAILS OF PICKUP ADDRESS *********************** */}

      <Collapse accordion className="mb-24">
        <Panel header="Pickup Address" key="3">
          <h3>Pickup Address</h3>

          <Form.Item
            name="Address Line 1"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Address Line 1*" />
          </Form.Item>
          <Form.Item
            name="Address Line 2"
          //   rules={[
          //     { required: true, message: "Please input your address!" },
          //   ]}
          >
            <Input placeholder="Address Line 2" />
          </Form.Item>
          <Form.Item
            name="Pincode"
            rules={[{ required: true, message: "Please input your pincode!" }]}
          >
            <Input placeholder="Pincode*" />
          </Form.Item>
          <Form.Item
            name="City"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input placeholder="City*" />
          </Form.Item>
          <Form.Item
            name="State"
            rules={[{ required: true, message: "State" }]}
          >
            <Input placeholder="State*" />
          </Form.Item>
          <Form.Item
            name="Country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input placeholder="Country*" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <Button type="primary" size="large">Submit</Button></div>
      
        </Panel>
      </Collapse>

      {/* **************************** DETAILS OF PACKAGE WEIGHT *********************** */}

      <Collapse accordion className="mb-24">
        <Panel header="Package Weight" key="4">
          
          <Row> <Col span={10}><Space><Input
            placeholder="Enter Package Weight"
            size="large" />
            <Button type="primary" size="large">KG</Button></Space></Col>
            <Col span={4}></Col>
            <Col span={10}><Space><Input
              placeholder="Length"
              size="large" />
              <Button type="primary" size="large">CM</Button></Space></Col>
          </Row>  <br />

          <Row justify="end">
            <Col span={10}><h5>(Max 3 digits after decimal place)</h5>
              <h5>Note: The minimum chargeable weight is 0.50 Kg</h5></Col>
            <Col span={4}></Col>
            <Col span={10}> <Space><Input
              placeholder="Width"
              size="large" />
              <Button type="primary" size="large">CM</Button></Space></Col>
          </Row>
          <Row justify="end">
            <Col span={10}><h4>Package Details*</h4>
              <Button type="primary">Add Package</Button></Col>
            <Col span={4}></Col>
            <Col span={10}> <Space><Input
              placeholder="Height"
              size="large" />
              <Button type="primary" size="large">CM</Button></Space></Col>
          </Row>
    
        </Panel>
      </Collapse>


    </>
  );
}

export default AddOrder;
