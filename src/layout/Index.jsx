import React from "react";
import { Layout } from "antd";
import { Sider } from "./Sider";
import Header from "./Header";
import Content from "./Content";

const MainLayout = () => (
  <Layout className="h-screen overflow-hidden">
    <Sider Layout={Layout} />
    <Layout>
      <Header Layout={Layout} />
      <Content Layout={Layout} />
    </Layout>
  </Layout>
);
export default MainLayout;
