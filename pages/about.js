import { Typography, Card, Row, Col } from 'antd'
import { motion } from 'framer-motion'
import { CoffeeOutlined, HeartOutlined, GlobalOutlined } from '@ant-design/icons'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            About Nevlix
          </Title>
          
          <Card style={{ marginBottom: 24 }}>
            <Title level={2}>Our Story</Title>
            <Paragraph>
              Welcome to Nevlix, your trusted partner for premium products and exceptional customer service. We are dedicated to bringing you the finest selection of high-quality products designed to enhance your modern lifestyle.
            </Paragraph>
            <Paragraph>
              Founded with a passion for excellence, Nevlix has grown to become a leading destination for customers seeking quality, reliability, and outstanding service. Our commitment to customer satisfaction drives everything we do.
            </Paragraph>
          </Card>
          
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card style={{ textAlign: 'center', height: '100%' }}>
                <CoffeeOutlined style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }} />
                <Title level={3}>Quality Products</Title>
                <Paragraph>
                  We carefully curate our product selection to ensure every item meets our high standards of quality and excellence.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card style={{ textAlign: 'center', height: '100%' }}>
                <HeartOutlined style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }} />
                <Title level={3}>Customer First</Title>
                <Paragraph>
                  Your satisfaction is our priority. We provide exceptional customer service and support throughout your shopping experience.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card style={{ textAlign: 'center', height: '100%' }}>
                <GlobalOutlined style={{ fontSize: 48, color: '#fa8c16', marginBottom: 16 }} />
                <Title level={3}>Reliable Service</Title>
                <Paragraph>
                  From fast shipping to hassle-free returns, we ensure a smooth and reliable shopping experience for all our customers.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          
          <Card style={{ marginTop: 24, textAlign: 'center' }}>
            <Title level={2}>Why Choose Nevlix?</Title>
            <Paragraph>
              At Nevlix, we believe in delivering more than just products – we deliver experiences. Our team is committed to providing you with the best selection, competitive prices, and unmatched customer service. Join thousands of satisfied customers who trust Nevlix for their shopping needs.
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </CommonLayout>
  )
}