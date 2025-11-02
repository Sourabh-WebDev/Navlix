import { Layout, Card, Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import axios from 'axios'
import Link from 'next/link'

const { Content } = Layout
const { Title } = Typography

export default function SignUp() {
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    try {
      const payload = {
        firstname: values.firstname,
        lastname: values.lastname,
        phone: values.phone,
        password: values.password,
        email: values.email,
      }

      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/User/register`, payload)
      toast.success('Registration successful!')
      form.resetFields()
    } catch (error) {
      toast.error('Registration failed. Please try again.')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card style={{ width: 400, textAlign: 'center', borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Title level={2} style={{ marginBottom: 24, color: '#1890ff' }}>Navlix</Title>
                </motion.div>
              </Link>
              <Title level={3} style={{ marginBottom: 32 }}>Create your account</Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Form.Item name="firstname" rules={[{ required: true, message: 'Required!' }]} style={{ flex: 1 }}>
                    <Input prefix={<UserOutlined />} placeholder="First Name" size="large" />
                  </Form.Item>
                  <Form.Item name="lastname" rules={[{ required: true, message: 'Required!' }]} style={{ flex: 1 }}>
                    <Input placeholder="Last Name" size="large" />
                  </Form.Item>
                </div>

                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Valid email required!' }]}>
                  <Input prefix={<MailOutlined />} placeholder="Email address" size="large" />
                </Form.Item>

                <Form.Item name="phone" rules={[{ required: true, message: 'Phone required!' }]}>
                  <Input prefix={<PhoneOutlined />} placeholder="Phone number" size="large" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, min: 6, message: 'Password min 6 chars!' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
                </Form.Item>

                <Form.Item>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Sign Up
                    </Button>
                  </motion.div>
                </Form.Item>
              </Form>

              <div style={{ marginTop: 16 }}>
                Already have an account?{' '}
                <Link href="/login">
                  <motion.span whileHover={{ scale: 1.05 }} style={{ color: '#1890ff', cursor: 'pointer' }}>
                    Sign In
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </Content>
    </Layout>
  )
}