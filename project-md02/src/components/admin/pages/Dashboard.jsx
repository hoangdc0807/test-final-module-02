import {
  DollarOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import React from "react";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "green",
                fontSize: "24px",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={12345}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "blue",
                fontSize: "24px",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title={"Product"}
          value={20}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "puprle",
                fontSize: "24px",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={1000}
        />
        <DashboardCard
          icon={
            <DollarOutlined
              style={{
                color: "red",
                fontSize: "24px",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={100000}
        />
      </Space>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Dashboard;
