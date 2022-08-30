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
  Button,
  Tag,
  Avatar,
  Typography,
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
    title: "ORDER ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "PRODUCTS",
    dataIndex: "products",
    key: "products",
  },
  {
    title: "TOTAL COST",
    dataIndex: "totalcost",
    key: "totalcost",
  },
  {
    title: "CUSTOMER",
    key: "customer",
    dataIndex: "customer",
  },
  {
    title: "WAREHOUSE",
    key: "warehouse",
    dataIndex: "warehouse",
  },
  {
    title: "COURIER",
    key: "courier",
    dataIndex: "courier",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
];

const data = [
  {
    orderId: "908-32422-42022",
    products: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
        </Avatar.Group>
      </>
    ),
    totalcost: "₹200",
    customer: (<>  <div className="avatar-info">
      <Title level={5}>Michael John</Title>
      <p>michael@mail.com</p>
    </div>
    </>),
    warehouse: "Whitefield, Bangalore",
    courier: "Dhelivery",
    status: (
      <>
        <Tag color="yellow">Pending</Tag>
      </>
    ),
  },
  {
    orderId: "957-34322-42532",
    products: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
        </Avatar.Group>
      </>
    ),
    totalcost: "₹500",
    customer: (<>  <div className="avatar-info">
      <Title level={5}>Ranveer Singh</Title>
      <p>ranveer@mail.com</p>
    </div>
    </>),
    warehouse: "Indranagar, Bangalore",
    courier: "ShadowFax",
    status: (
      <>
        <Tag color="green">Completed</Tag>
      </>
    ),
  },
];

function Orders() {
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
                <span>Total<br />Orders</span>
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
                <span>Allocated<br />Orders</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  20
                </Title>
                <span>Pending<br />Orders</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  15
                </Title>
                <span>Shipped<br />Orders</span>
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
                <span>Completed<br />Orders</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  2
                </Title>
                <span>Cancelled<br />Orders</span>
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
            title="All Orders"
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
                  <Option value="Shipped">Shipped</Option>
                  <Option value="Completed">Completed</Option>
                  <Option value="Cancelled">Cancelled</Option>
                </Select>
                <Button type="primary" shape="round">
                  <Link to="/addorder">
                    <span className="label">ADD ORDER</span>
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

export default Orders;
