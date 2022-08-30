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
  Button,
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
    title: "SKU",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "ARRIVING",
    dataIndex: "arriving",
    key: "arriving",
  },
  {
    title: "WAREHOUSING",
    dataIndex: "warehousing",
    key: "warehousing",
  },
  {
    title: "DISPATCHED",
    dataIndex: "dispatched",
    key: "dispatched",
  },
  {
    title: "DAMAGED",
    dataIndex: "damaged",
    key: "damaged",
  },
  {
    title: "REMAINING STOCKS",
    dataIndex: "remainingStocks",
    key: "remainingStocks",
  },
];

const data = [
  {
    sku: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Leather Jacket</Title>
            <p>ID: 202-12323-1</p>
          </div>
        </Avatar.Group>
      </>
    ),
    arriving: "10",
    warehousing: "23",
    dispatched: "2",
    damaged: "14",
    remainingStocks: "26",
  },
];

function Inventory() {
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
                <span>Total<br />Stocks</span>
              </Col>
            </div>
          </Card>
        </Col>
        <Col flex={1} >
          <Card bordered={false} className="criclebox">
            <div className="number">
              <Col className="m-10">
                <Title level={3}>
                  77
                </Title>
                <span>Total<br />Arriving</span>
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
                <span>Total<br />Warehousing</span>
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
                <span>Total<br />Dispatched</span>
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
                <span>Total<br />Damaged</span>
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
                <span>Total<br />Out Of Stock</span>
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
            title="Inventory"
          extra={
            <>
              <Button type="primary" shape="round">
                  <Link to="/addinventory">
                    <span className="label">ADD INVENTORY</span>
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

export default Inventory;
