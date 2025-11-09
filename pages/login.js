import { Layout, Card, Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import axios from 'axios'
import Link from 'next/link'

const { Content } = Layout
const { Title } = Typography

export default function Login() {
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    try {
      const isEmail = values.emailOrPhone.includes('@')
      const payload = {
        email: isEmail ? values.emailOrPhone : '',
        phone: isEmail ? '' : values.emailOrPhone,
        password: values.password
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/User/login`, payload)

      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response?.data.token)
        console.log(response?.data.token, 'response')
        // Fetch user information
        const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/User/secure`, {
          headers: { Authorization: `Bearer ${response?.data.token}` }
        })
        localStorage.setItem('user', JSON.stringify(userResponse.data))
      }

      toast.success('Login successful!')
      if (userData.roleList.includes('customer')) {
        navigate('/home');
      } else {
        navigate('/dashboard');
      }

    } catch (error) {
      toast.error('Login failed. Please check your credentials.')
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
                  <Title level={2} style={{ marginBottom: 24, color: '#52c41a' }}>Navlix</Title>
                </motion.div>
              </Link>
              <Title level={3} style={{ marginBottom: 32 }}>Sign in to your account</Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item name="emailOrPhone" rules={[{ required: true, message: 'Please input email or phone!' }]}>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input prefix={<UserOutlined />} placeholder="Email or Phone" size="large" />
                  </motion.div>
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
                  </motion.div>
                </Form.Item>

                <Form.Item>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Sign in
                    </Button>
                  </motion.div>
                </Form.Item>
              </Form>

              <div style={{ marginTop: 16 }}>
                Don't have an account?{' '}
                <Link href="/signup">
                  <motion.span whileHover={{ scale: 1.05 }} style={{ color: '#1890ff', cursor: 'pointer' }}>
                    Sign Up
                  </motion.span>
                </Link>
              </div>
              <Link href="/">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button type="link">Back to home</Button>
                </motion.div>
              </Link>
            </motion.div>
          </Card>
        </motion.div>
      </Content>
    </Layout>
  )
}