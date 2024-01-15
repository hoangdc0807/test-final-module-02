import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

function AdminHeader() {
  return (
    <div className='Admin-Header'>
      <Image
        width={40}
        src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
      ></Image>
      <Typography.Title>Welcome Admin !!!</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}

export default AdminHeader;
