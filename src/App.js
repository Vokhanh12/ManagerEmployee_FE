import React from 'react';
import './App.css';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Title style ={{color:'white', paddingRight:'30px'}} level={3} >EMPLOYEE</Title>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(10).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
              className: 'custom-menu-item'
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
        <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/"  element= {<ListEmployeesComponent />} />
            <Route path="/employees" element= {<ListEmployeesComponent />} />
            <Route path="/add-employee" element = {<CreateEmployeeComponent/>} /> 
            <Route path="/update-employee/:id" element = {<UpdateEmployeeComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
