import { Layout, Menu, Button, Typography, Row, Col, Card, Statistic } from 'antd'
import { DashboardOutlined, ShoppingOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { logout } from '../../utils/auth'
import { useEffect } from 'react'
import Link from 'next/link'

const { Header, Sider, Content } = Layout
const { Title } = Typography

export default function Dashboard() {
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
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>Navlix</Title>
            </Link>
          </Col>
          <Col>
            <Button onClick={logout}>Logout</Button>
          </Col>
        </Row>
      </Header>
      
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="inline" selectedKeys={['dashboard']} style={{ height: '100%', borderRight: 0 }}>
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
          <Title level={2}>Dashboard</Title>
          
          <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
            <Col xs={24} md={8}>
              <Card>
                <Statistic title="Total Orders" value={12} valueStyle={{ color: '#1890ff' }} />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic title="Total Spent" value={1234} prefix="$" valueStyle={{ color: '#52c41a' }} />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic title="Pending Orders" value={3} valueStyle={{ color: '#fa8c16' }} />
              </Card>
            </Col>
          </Row>
          
          <Card title="Recent Orders">
            {[1, 2, 3].map((order) => (
              <Row key={order} justify="space-between" style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <Col>
                  <div>Order #{1000 + order}</div>
                  <div style={{ color: '#8c8c8c', fontSize: '12px' }}>2 items</div>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <div>${99 + order * 20}</div>
                  <div style={{ color: '#52c41a', fontSize: '12px' }}>Delivered</div>
                </Col>
              </Row>
            ))}
          </Card>
        </Content>
      </Layout>
    </Layout>
  )
}