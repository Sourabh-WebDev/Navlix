import { Layout, Menu, Button, Typography, Card, Switch, Row, Col } from 'antd'
import { DashboardOutlined, ShoppingOutlined, UserOutlined, SettingOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { logout } from '../../utils/auth'
import { useEffect } from 'react'
import Link from 'next/link'

const { Header, Sider, Content } = Layout
const { Title } = Typography

export default function Settings() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    
    if (!token) {
      window.location.href = '/login'
      return
    }
    
    try {
      const userData = JSON.parse(user)
      if (userData?.role === 'customer') {
        window.location.href = '/'
        return
      }
    } catch (error) {
      console.error('Error parsing user data:', error)
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
          <Menu mode="inline" selectedKeys={['settings']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
              <Link href="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="orders" icon={<ShoppingOutlined />}>
              <Link href="/dashboard/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="timesheet" icon={<ClockCircleOutlined />}>
              <Link href="/dashboard/timesheet">Timesheet</Link>
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
          <Title level={2}>Settings</Title>
          
          <Card title="Notifications" style={{ marginBottom: 16 }}>
            <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
              <Col>Email notifications</Col>
              <Col><Switch defaultChecked /></Col>
            </Row>
            <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
              <Col>SMS notifications</Col>
              <Col><Switch /></Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col>Order updates</Col>
              <Col><Switch defaultChecked /></Col>
            </Row>
          </Card>

          <Card title="Privacy" style={{ marginBottom: 16 }}>
            <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
              <Col>Make profile public</Col>
              <Col><Switch /></Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col>Allow marketing emails</Col>
              <Col><Switch defaultChecked /></Col>
            </Row>
          </Card>

          <Card title="Account">
            <div style={{ marginBottom: 16 }}>
              <Button type="link">Change Password</Button>
            </div>
            <div>
              <Button type="link" danger>Delete Account</Button>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  )
}