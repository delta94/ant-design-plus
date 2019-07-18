import React from 'react';
import { Layout } from 'antd';
import Header from './header';

const { Content } = Layout;

const BasicLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Content>
        {children}
      </Content>
    </Layout>
  )
};

export default BasicLayout;