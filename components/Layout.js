import { Layout, Menu, Button, Typography, Row, Col, Avatar, Input, Space, FloatButton } from 'antd'
import { ShoppingCartOutlined, InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useUser } from '../contexts/UserContext'
import Link from 'next/link'
import Image from 'next/image'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CommonLayout({ children }) {
  const [token, setToken] = useState(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const { user } = useUser()

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: windowWidth < 576 ? '0 8px' : '0 16px', height: 'auto', lineHeight: 'normal' }}>
          <Row justify="space-between" align="middle" style={{ minHeight: 64 }}>
            <Col xs={8} sm={6} md={4} lg={3} xl={3}>
              <Link href="/">
                <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer' }}>
                  <Image
                    src="/images/Navlix.jpeg"
                    alt="Nevlix Logo"
                    width={windowWidth < 576 ? 60 : windowWidth < 768 ? 80 : windowWidth < 1024 ? 100 : 120}
                    height={windowWidth < 576 ? 25 : windowWidth < 768 ? 30 : windowWidth < 1024 ? 35 : 40}
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
              </Link>
            </Col>
            <Col xs={0} sm={0} md={0} lg={14} xl={14}>
              <Menu
                mode="horizontal"
                style={{ border: 'none', background: 'transparent', justifyContent: 'center' }}
                items={[
                  { key: 'home', label: <Link href="/">Home</Link> },
                  { key: 'products', label: 'Products' },
                  { key: 'about', label: <Link href="/about">About</Link> },
                  { key: 'contact', label: <Link href="/contact">Contact</Link> }
                ]}
              />
            </Col>
            <Col xs={16} sm={18} md={20} lg={7} xl={7} style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: windowWidth < 576 ? 2 : windowWidth < 768 ? 3 : 4, flexWrap: 'wrap' }}>
                {token ?
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Avatar style={{ backgroundColor: '#62a86eff', verticalAlign: 'middle' }} size={windowWidth < 768 ? 'default' : 'large'} gap={2}>
                      {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
                    </Avatar>
                  </motion.span> :
                  <Link href="/login">
                    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                      <Button type="text" size={windowWidth < 576 ? 'small' : windowWidth < 1024 ? 'small' : 'middle'}>{windowWidth < 576 ? 'Login' : 'Login'}</Button>
                    </motion.span>
                  </Link>}
                {!token && <Link href="/signup">
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Button type="default" size={windowWidth < 576 ? 'small' : windowWidth < 1024 ? 'small' : 'middle'}>{windowWidth < 576 ? 'Join' : 'Sign Up'}</Button>
                  </motion.span>
                </Link>}
                {user?.roleList.includes('admin') && <Link href="/dashboard">
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Button type="default" size={windowWidth < 576 ? 'small' : windowWidth < 1024 ? 'small' : 'middle'}>{windowWidth < 768 ? 'Admin' : 'Dashboard'}</Button>
                  </motion.span>
                </Link>}
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Button type="primary" icon={<ShoppingCartOutlined />} size={windowWidth < 576 ? 'small' : windowWidth < 1024 ? 'small' : 'middle'}>
                    {windowWidth < 576 ? '' : windowWidth < 768 ? 'Cart' : 'Cart (0)'}
                  </Button>
                </motion.span>
              </div>
            </Col>
          </Row>
        </Header>
      </motion.div>

      <Content style={{ minHeight: 'calc(100vh - 200px)' }}>
        {children}
      </Content>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer style={{ background: '#001529', padding: windowWidth < 576 ? '20px 8px 8px' : windowWidth < 768 ? '30px 12px 12px' : windowWidth < 1024 ? '40px 16px 16px' : '60px 24px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Row gutter={windowWidth < 576 ? [8, 16] : windowWidth < 768 ? [16, 20] : windowWidth < 1024 ? [24, 24] : [32, 32]}>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <motion.div variants={fadeInUp}>
                    <Image
                      src="/images/Navlix.jpeg"
                      alt="Nevlix Logo"
                      width={windowWidth < 576 ? 80 : windowWidth < 768 ? 100 : 120}
                      height={windowWidth < 576 ? 30 : windowWidth < 768 ? 35 : 40}
                      style={{ objectFit: 'contain', marginBottom: 16 }}
                    />
                    <Paragraph style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontSize: windowWidth < 576 ? '12px' : '14px' }}>
                      Your trusted partner for premium products and exceptional customer service.
                    </Paragraph>
                  </motion.div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={4} style={{ color: 'white', marginBottom: 16, fontSize: windowWidth < 576 ? '14px' : '16px' }}>Quick Links</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>Products</motion.a>
                      <Link href="/about">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>About Us</motion.span>
                      </Link>
                      <Link href="/shipping-policy">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>Shipping Policy</motion.span>
                      </Link>
                      <Link href="/contact">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>Contact</motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={4} style={{ color: 'white', marginBottom: 16, fontSize: windowWidth < 576 ? '14px' : '16px' }}>Legal</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <Link href="/cancellation-refunds">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>Cancellation & Refunds</motion.span>
                      </Link>
                      <Link href="/privacy-policy">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>Privacy Policy</motion.span>
                      </Link>
                      <Link href="/terms-conditions">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>Terms & Conditions</motion.span>
                      </Link>
                      <Link href="/legal-disclaimer">
                        <motion.span style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' }} whileHover={{ color: 'white', x: 5 }}>Legal Disclaimer</motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={4} style={{ color: 'white', marginBottom: 16, fontSize: windowWidth < 576 ? '14px' : '16px' }}>Follow Us</Title>
                    <div style={{ marginBottom: 16 }}>
                      <motion.a
                        href="https://www.instagram.com/nevlixofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'rgba(255,255,255,0.65)', marginRight: 16, fontSize: 24 }}
                        whileHover={{ color: '#E4405F', scale: 1.1 }}
                      >
                        <InstagramOutlined />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com/share/1CSRS7Fhvy"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 24 }}
                        whileHover={{ color: '#1877F2', scale: 1.1 }}
                      >
                        <FacebookOutlined />
                      </motion.a>
                    </div>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}>Subscribe for updates and exclusive offers</Paragraph>
                    <Space.Compact style={{ width: '100%' }}>
                      <Input placeholder="Enter your email" style={{ width: 'calc(100% - 100px)' }} />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button type="primary" style={{ width: 100 }}>Subscribe</Button>
                      </motion.div>
                    </Space.Compact>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
            <motion.div
              style={{ textAlign: 'center', marginTop: 48, paddingTop: 24, borderTop: '1px solid #434343' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Paragraph style={{ color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                © 2024 Nevlix. All rights reserved.
              </Paragraph>
            </motion.div>
          </div>
        </Footer>
      </motion.div>

      <FloatButton
        icon={<WhatsAppOutlined />}
        type="primary"
        style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
        onClick={() => window.open('https://wa.me/917982995541', '_blank')}
        tooltip="Chat on WhatsApp"
      />
    </Layout>
  )
}