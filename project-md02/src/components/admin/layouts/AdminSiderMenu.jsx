import {
  DashboardOutlined,
  OrderedListOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminSiderMenu() {
  const navigate = useNavigate();
  return (
    <div className='SiderMenu'>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          { label: "Dashboard", icon: <DashboardOutlined />, key: "/" },
          {
            label: "Manager Product",
            icon: <ShopOutlined />,
            key: "/manager-product",
          },
          {
            label: "Manager Order",
            icon: <OrderedListOutlined />,
            key: "/manager-order",
          },
          {
            label: "Manager Customers",
            icon: <UserOutlined />,
            key: "/manager-customers",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default AdminSiderMenu;
