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
import {
  Row,
  Col,
  Card,
  Select,
  Table,
  Tag,
  Avatar,
  Typography,
  Button,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";

const { Title } = Typography;
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

// table code start
const columns = [
  {
    title: "SKU ID",
    dataIndex: "skuId",
    key: "skuId",
  },
  {
    title: "IMAGE",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "CATEGORY",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
];

const data = [
  {
    skuId: "202-12323-1",
    image: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
        </Avatar.Group>
      </>
    ),
    name: "Leather Jacket",
    category: "Clothing",
    price: "₹200",
    status: (
      <>
        <Tag color="green">Allocated</Tag>
      </>
    ),
  },
];

function SKUs() {
  return (
    <>

      <Row className="rowgap-vbox mb-24" gutter={[24, 24]}>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  77
                </Title>
                <span>Total<br />SKUs</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  24
                </Title>
                <span>Allocated<br />SKUs</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  50
                </Title>
                <span>Pending<br />SKUs</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  3
                </Title>
                <span>Blocked<br />SKUs</span>
              </Col>
            </div>
          </Card>
        </Col>
      </Row>

      <div className="tabled">
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="All SKUs"
            extra={
              <>
                <Select
                  defaultValue="Order Status"
                  style={{
                    width: 200,
                    marginRight: 15,
                  }}
                  onChange={handleChange}
                >
                  <Option value="Order Status" disabled>Order Status</Option>
                  <Option value="Allocated">Allocated</Option>
                  <Option value="Pending">Pending</Option>
                  <Option value="Cancelled">Blocked</Option>
                </Select>

                <Button type="primary" shape="round">
                  <Link to="/addsku">
                    <span className="label">ADD SKU</span>
                  </Link>
                </Button>
              </>
            }
          >
            <div className="table-responsive">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                className="ant-border-space"
              />
            </div>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default SKUs;
