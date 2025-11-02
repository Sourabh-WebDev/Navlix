import { Layout, Menu, Button, Typography, Card, Tag, Row, Col } from 'antd'
import { DashboardOutlined, ShoppingOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { logout } from '../../utils/auth'
import { useEffect } from 'react'
import Link from 'next/link'

const { Header, Sider, Content } = Layout
const { Title } = Typography

export default function Orders() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/login'
    }
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '0 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Link href="/">
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>ShopNow</Title>
            </Link>
          </Col>
          <Col>
            <Button onClick={logout}>Logout</Button>
          </Col>
        </Row>
      </Header>
      
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="inline" selectedKeys={['orders']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
              <Link href="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="orders" icon={<ShoppingOutlined />}>
              <Link href="/dashboard/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link href="/dashboard/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              <Link href="/dashboard/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        
        <Content style={{ padding: 24 }}>
          <Title level={2}>My Orders</Title>
          
          {[1, 2, 3, 4, 5].map((order) => (
            <Card key={order} style={{ marginBottom: 16 }}>
              <Row justify="space-between" align="top">
                <Col>
                  <Title level={4}>Order #{1000 + order}</Title>
                  <p style={{ color: '#8c8c8c' }}>Placed on Dec {order + 10}, 2024</p>
                </Col>
                <Col>
                  <Tag color={order % 3 === 0 ? 'green' : order % 2 === 0 ? 'orange' : 'blue'}>
                    {order % 3 === 0 ? 'Delivered' : order % 2 === 0 ? 'Shipped' : 'Processing'}
                  </Tag>
                </Col>
              </Row>
              <Row justify="space-between" align="middle" style={{ marginTop: 16 }}>
                <Col>
                  <div style={{ color: '#8c8c8c' }}>{order + 1} items</div>
                  <Title level={4}>${99 + order * 25}</Title>
                </Col>
                <Col>
                  <Button type="link">View Details</Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Content>
      </Layout>
    </Layout>
  )
}