import React from "react";

function Admin() {
  return (
    <div className='App'>
      <AdminHeader />
      <Space className='SideMenuAndContent'>
        <AdminSiderMenu />
        <AdminContent />
      </Space>
      <AdminFooter />
    </div>
  );
}

export default Admin;
