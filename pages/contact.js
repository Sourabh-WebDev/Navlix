import { Typography, Card, Row, Col, Form, Input, Button } from 'antd'
import { motion } from 'framer-motion'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, WhatsAppOutlined } from '@ant-design/icons'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function Contact() {
  const onFinish = (values) => {
    console.log('Contact form:', values)
  }

  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Contact Us
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card title="Get in Touch">
                <div style={{ marginBottom: 24 }}>
                  <MailOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  <strong>Email:</strong> wecare@nevlix.com
                </div>
                <div style={{ marginBottom: 24 }}>
                  <PhoneOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  <strong>Phone:</strong> +91-7982995541
                </div>
                <div style={{ marginBottom: 24 }}>
                  <EnvironmentOutlined style={{ marginRight: 8, color: '#fa8c16' }} />
                  <strong>Address:</strong> Nevlix Headquarters, India
                </div>
                <div style={{ marginBottom: 24 }}>
                  <WhatsAppOutlined style={{ marginRight: 8, color: '#25D366' }} />
                  <strong>WhatsApp:</strong> 
                  <a href="https://wa.me/917982995541" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: '#25D366' }}>
                    +91-7982995541
                  </a>
                </div>
                <Paragraph>
                  We're here to help! Reach out to us for any questions about our products, orders, or services. Our customer support team is ready to assist you.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card title="Send us a Message">
                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input placeholder="Your name" />
                  </Form.Item>
                  <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input placeholder="Your email" />
                  </Form.Item>
                  <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
                    <Input placeholder="Message subject" />
                  </Form.Item>
                  <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                    <TextArea rows={4} placeholder="Your message" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </div>
    </CommonLayout>
  )
}