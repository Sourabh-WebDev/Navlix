import { Layout, Menu, Button, Typography, Row, Col, Card, Table, Form, Input, DatePicker, TimePicker, Select, Modal, message } from 'antd'
import { DashboardOutlined, ShoppingOutlined, UserOutlined, SettingOutlined, ClockCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { logout } from '../../utils/auth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import dayjs from 'dayjs'

const { Header, Sider, Content } = Layout
const { Title } = Typography
const { Option } = Select

export default function Timesheet() {
  const [timesheets, setTimesheets] = useState([])
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    
    if (!token) {
      window.location.href = '/login'
      return
    }
    
    try {
      const userData = JSON.parse(user)
      if (userData?.roleList === 'customer') {
        window.location.href = '/'
        return
      }
    } catch (error) {
      console.error('Error parsing user data:', error)
    }
    
    fetchTimesheets()
  }, [])

  const fetchTimesheets = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/Timesheet`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setTimesheets(response.data.items || [])
    } catch (error) {
      message.error('Failed to fetch timesheets')
    }
    setLoading(false)
  }

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/Timesheet/Createtimesheet`, [{
        goalName: values.goalName,
        target: values.target,
        goalDate: values.goalDate.format('YYYY-MM-DD'),
        status0002: values.status0002 || 'Sleeping',
        status0204: values.status0204 || 'Sleeping',
        status0406: values.status0406 || 'Sleeping',
        status0608: values.status0608 || '',
        status0810: values.status0810 || '',
        status1012: values.status1012 || '',
        status1214: values.status1214 || '',
        status1416: values.status1416 || '',
        status1618: values.status1618 || '',
        status1820: values.status1820 || '',
        status2022: values.status2022 || '',
        status2224: values.status2224 || 'Sleeping',
        achieved: values.achieved || '',
        remark: values.remark || ''
      }], {
        headers: { Authorization: `Bearer ${token}` }
      })
      message.success('Timesheet entry added successfully')
      setModalVisible(false)
      form.resetFields()
      fetchTimesheets()
    } catch (error) {
      message.error('Failed to add timesheet entry')
    }
  }

  const columns = [
    { title: 'Goal Name', dataIndex: 'goalName', key: 'goalName' },
    { title: 'Target', dataIndex: 'target', key: 'target' },
    { title: 'Goal Date', dataIndex: 'goalDate', key: 'goalDate' },
    { title: 'Achieved', dataIndex: 'achieved', key: 'achieved' },
    { title: 'Remark', dataIndex: 'remark', key: 'remark' }
  ]

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
        <Sider width={200} style={{ background: '#fff' }} breakpoint="lg" collapsedWidth="0">
          <Menu mode="inline" selectedKeys={['timesheet']} style={{ height: '100%', borderRight: 0 }}>
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
          <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
            <Col>
              <Title level={2}>Timesheet</Title>
            </Col>
            <Col>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setModalVisible(true)}>
                Add Entry
              </Button>
            </Col>
          </Row>

          <Card>
            <Table
              columns={columns}
              dataSource={timesheets}
              loading={loading}
              rowKey="id"
              pagination={{ pageSize: 10 }}
              scroll={{ x: 800 }}
            />
          </Card>

          <Modal
            title="Add Timesheet Entry"
            open={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
            width="90%"
            style={{ maxWidth: 600 }}
          >
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item name="goalName" label="Goal Name" rules={[{ required: true }]}>
                <Input placeholder="Enter goal name" />
              </Form.Item>
              <Form.Item name="target" label="Target" rules={[{ required: true }]}>
                <Input placeholder="Enter target" />
              </Form.Item>
              <Form.Item name="goalDate" label="Goal Date" rules={[{ required: true }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="status0608" label="6-8 AM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="status0810" label="8-10 AM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="status1012" label="10-12 PM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="status1214" label="12-2 PM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="status1416" label="2-4 PM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="status1618" label="4-6 PM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="status1820" label="6-8 PM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="status2022" label="8-10 PM">
                    <Input placeholder="Status" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="status2224" label="10-12 AM" initialValue="Sleeping">
                    <Input defaultValue="Sleeping" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="status0002" label="12-2 AM" initialValue="Sleeping">
                    <Input defaultValue="Sleeping" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="status0204" label="2-4 AM" initialValue="Sleeping">
                    <Input defaultValue="Sleeping" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="status0406" label="4-6 AM" initialValue="Sleeping">
                    <Input defaultValue="Sleeping" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="achieved" label="Achieved">
                <Input placeholder="Enter achieved" />
              </Form.Item>
              <Form.Item name="remark" label="Remark">
                <Input.TextArea placeholder="Enter remark" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Add Entry
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  )
}