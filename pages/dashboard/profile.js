import { Layout, Menu, Button, Typography, Card, Form, Input, Row, Col } from 'antd'
import { DashboardOutlined, ShoppingOutlined, UserOutlined, SettingOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { logout } from '../../utils/auth'
import { useEffect } from 'react'
import Link from 'next/link'

const { Header, Sider, Content } = Layout
const { Title } = Typography
const { TextArea } = Input

export default function Profile() {
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
          <Menu mode="inline" selectedKeys={['profile']} style={{ height: '100%', borderRight: 0 }}>
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
          <Title level={2}>Profile</Title>
          
          <Card>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item label="First Name">
                    <Input defaultValue="John" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Last Name">
                    <Input defaultValue="Doe" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item label="Email">
                <Input defaultValue="john.doe@example.com" />
              </Form.Item>
              
              <Form.Item label="Phone">
                <Input defaultValue="+1 (555) 123-4567" />
              </Form.Item>
              
              <Form.Item label="Address">
                <TextArea rows={3} defaultValue="123 Main St, City, State 12345" />
              </Form.Item>
              
              <Form.Item>
                <Button type="primary">Update Profile</Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  )
}