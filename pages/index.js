import { Layout, Menu, Button, Typography, Row, Col, Card, Avatar, Input, AutoComplete, Carousel, Space } from 'antd'
import { ShoppingCartOutlined, TruckOutlined, SafetyOutlined, UndoOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from '../contexts/UserContext'
import Link from 'next/link'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography
const { Meta } = Card

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

const products = [
  'iPhone 15 Pro', 'Samsung Galaxy S24', 'MacBook Pro', 'iPad Air', 'AirPods Pro',
  'Dell XPS 13', 'Sony WH-1000XM5', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X',
  'Apple Watch', 'Fitbit Charge', 'Canon EOS R5', 'GoPro Hero 12', 'Drone DJI Mini'
]

export default function Home() {
  const [searchOptions, setSearchOptions] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [token, setToken] = useState(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/Product`)
      .then(res => setFeaturedProducts(res.data.items?.slice(0, 3) || []))
      .catch(err => console.error('Error fetching products:', err))

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSearch = async (value) => {
    if (!value) {
      setSearchOptions([])
      return
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/Product`)
      const filtered = response.data.items?.filter(product =>
        product.ProductName.toLowerCase().includes(value.toLowerCase())
      ).map(product => ({
        value: product.ProductName,
        label: `${product.ProductName} - ₹${product.DiscountedPrice}`
      })) || []
      setSearchOptions(filtered)
    } catch (error) {
      console.error('Search error:', error)
    }
  }


  const { user, updateUser, logout } = useUser()


  console.log(featuredProducts, 'Featured Products')

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '0 16px', height: 'auto', lineHeight: 'normal' }}>
          <Row justify="space-between" align="middle" style={{ minHeight: 64 }}>
            <Col xs={6} sm={6} md={4}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Title level={3} style={{ margin: 0, color: '#52c41a', fontSize: windowWidth < 768 ? '18px' : '24px' }}>Navlix</Title>
              </motion.div>
            </Col>
            <Col xs={0} sm={0} md={12}>
              <Menu 
                mode="horizontal" 
                style={{ border: 'none', background: 'transparent', justifyContent: 'center' }}
                items={[
                  { key: 'products', label: 'Products' },
                  { key: 'about', label: 'About' },
                  { key: 'contact', label: 'Contact' }
                ]}
              />
            </Col>
            <Col xs={18} sm={18} md={8} style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, flexWrap: 'wrap' }}>
                {token ?
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Avatar style={{ backgroundColor: '#62a86eff', verticalAlign: 'middle' }} size={windowWidth < 768 ? 'default' : 'large'} gap={2}>
                      {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
                    </Avatar>
                  </motion.span> :
                  <Link href="/login">
                    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                      <Button type="text" size={windowWidth < 768 ? 'small' : 'middle'}>Login</Button>
                    </motion.span>
                  </Link>}
                {!token && <Link href="/signup">
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Button type="default" size={windowWidth < 768 ? 'small' : 'middle'}>Sign Up</Button>
                  </motion.span>
                </Link>}
                {user?.roleList.includes('admin') && <Link href="/dashboard">
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Button type="default" size={windowWidth < 768 ? 'small' : 'middle'}>Dashboard</Button>
                  </motion.span>
                </Link>}
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Button type="primary" icon={<ShoppingCartOutlined />} size={windowWidth < 768 ? 'small' : 'middle'}>
                    {windowWidth < 576 ? 'Cart' : 'Cart (0)'}
                  </Button>
                </motion.span>
              </div>
            </Col>
          </Row>
        </Header>
      </motion.div>

      <Content>
        <motion.div
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            padding: windowWidth < 768 ? '60px 16px' : '100px 24px', 
            textAlign: 'center', 
            color: 'white' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div {...fadeInUp}>
            <Title level={1} style={{ 
              fontSize: windowWidth < 576 ? '2rem' : windowWidth < 768 ? '2.5rem' : '3.5rem', 
              marginBottom: 24, 
              color: 'white',
              lineHeight: 1.2
            }}>
              Premium Products for Modern Living
            </Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paragraph style={{ 
              fontSize: windowWidth < 576 ? '1rem' : '1.3rem', 
              maxWidth: 600, 
              margin: '0 auto 40px', 
              color: 'rgba(255,255,255,0.9)',
              padding: '0 16px'
            }}>
              Discover our curated collection of high-quality products designed to enhance your lifestyle.
            </Paragraph>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ maxWidth: 500, margin: '0 auto 32px' }}
          >
            <AutoComplete
              options={searchOptions}
              onSearch={handleSearch}
              placeholder="Search for products..."
              style={{ width: '100%' }}
            >
              <Input.Search
                size="large"
                style={{ borderRadius: 25 }}
                enterButton="Search"
              />
            </AutoComplete>
          </motion.div>
        </motion.div>

        <div style={{ padding: windowWidth < 768 ? '40px 16px' : '80px 24px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 60 }}
          >
            <Carousel autoplay dotPosition="bottom" style={{ borderRadius: 12, overflow: 'hidden' }}>
              <div>
                <div style={{ 
                  height: windowWidth < 768 ? 200 : 300, 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white' 
                }}>
                  <div style={{ textAlign: 'center', padding: '0 16px' }}>
                    <Title level={2} style={{ 
                      color: 'white', 
                      marginBottom: 16, 
                      fontSize: windowWidth < 576 ? '20px' : '28px' 
                    }}>Special Offers</Title>
                    <Paragraph style={{ 
                      fontSize: windowWidth < 576 ? '14px' : '18px', 
                      color: 'rgba(255,255,255,0.9)' 
                    }}>Up to 50% off on selected items</Paragraph>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ 
                  height: windowWidth < 768 ? 200 : 300, 
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white' 
                }}>
                  <div style={{ textAlign: 'center', padding: '0 16px' }}>
                    <Title level={2} style={{ 
                      color: 'white', 
                      marginBottom: 16, 
                      fontSize: windowWidth < 576 ? '20px' : '28px' 
                    }}>New Arrivals</Title>
                    <Paragraph style={{ 
                      fontSize: windowWidth < 576 ? '14px' : '18px', 
                      color: 'rgba(255,255,255,0.9)' 
                    }}>Discover the latest products</Paragraph>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ 
                  height: windowWidth < 768 ? 200 : 300, 
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white' 
                }}>
                  <div style={{ textAlign: 'center', padding: '0 16px' }}>
                    <Title level={2} style={{ 
                      color: 'white', 
                      marginBottom: 16, 
                      fontSize: windowWidth < 576 ? '20px' : '28px' 
                    }}>Free Shipping</Title>
                    <Paragraph style={{ 
                      fontSize: windowWidth < 576 ? '14px' : '18px', 
                      color: 'rgba(255,255,255,0.9)' 
                    }}>On orders over $50</Paragraph>
                  </div>
                </div>
              </div>
            </Carousel>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title level={2} style={{ 
              textAlign: 'center', 
              marginBottom: windowWidth < 768 ? 40 : 60, 
              fontSize: windowWidth < 576 ? '1.8rem' : '2.5rem' 
            }}>
              Featured Products
            </Title>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} justify="center">
              {featuredProducts.map((product) => (
                <Col xs={24} sm={12} lg={8} key={product.ProductId}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      hoverable
                      cover={
                        (() => {
                          try {
                            const images = JSON.parse(product.Images)
                            const imageUrl = images[0]?.ImageUrl
                            return imageUrl ? (
                              <img
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageUrl}`}
                                alt={product.ProductName}
                                style={{ height: 250, objectFit: 'cover' }}
                              />
                            ) : (
                              <div style={{ height: 250, background: 'linear-gradient(45deg, #f0f2f5, #d9d9d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#8c8c8c' }}>No Image</div>
                            )
                          } catch {
                            return <div style={{ height: 250, background: 'linear-gradient(45deg, #f0f2f5, #d9d9d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#8c8c8c' }}>No Image</div>
                          }
                        })()
                      }
                      style={{ borderRadius: 12, overflow: 'hidden' }}
                    >
                      <Meta
                        title={<span style={{ fontSize: '18px' }}>{product.ProductName}</span>}
                        description={`${product.CategoryName} - ${product.ProductDescription}`}
                      />
                      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Title level={3} style={{ color: '#1890ff', margin: 0 }}>
                          ₹{product.DiscountedPrice}
                        </Title>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button type="primary" size={windowWidth < 576 ? 'middle' : 'large'}>
                            Add to Cart
                          </Button>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>

        <div style={{ background: '#f8f9fa', padding: windowWidth < 768 ? '40px 16px' : '80px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Row gutter={[48, 48]} justify="center">
                {[
                  { icon: TruckOutlined, title: 'Free Shipping', desc: 'Free shipping on all orders over $50. Fast and reliable delivery.', color: '#1890ff' },
                  { icon: SafetyOutlined, title: 'Secure Payment', desc: '100% secure payment processing with SSL encryption.', color: '#52c41a' },
                  { icon: UndoOutlined, title: 'Easy Returns', desc: '30-day hassle-free return policy for your peace of mind.', color: '#fa8c16' }
                ].map((feature, index) => (
                  <Col xs={24} md={8} key={index} style={{ textAlign: 'center' }}>
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Avatar size={80} style={{ backgroundColor: feature.color, marginBottom: 24 }}>
                          <feature.icon style={{ fontSize: 32 }} />
                        </Avatar>
                      </motion.div>
                      <Title level={3} style={{ marginBottom: 16 }}>{feature.title}</Title>
                      <Paragraph style={{ fontSize: '16px', color: '#666' }}>{feature.desc}</Paragraph>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </div>
        </div>
      </Content>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer style={{ background: '#001529', padding: windowWidth < 768 ? '40px 16px 16px' : '60px 24px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Row gutter={[32, 32]}>
                <Col xs={24} md={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={3} style={{ color: 'white', marginBottom: 16 }}>Navlix</Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                      Your trusted partner for premium products and exceptional customer service.
                    </Paragraph>
                  </motion.div>
                </Col>
                <Col xs={24} md={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={4} style={{ color: 'white', marginBottom: 16 }}>Quick Links</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>Products</motion.a>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>About Us</motion.a>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>Contact</motion.a>
                    </div>
                  </motion.div>
                </Col>
                <Col xs={24} md={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={4} style={{ color: 'white', marginBottom: 16 }}>Support</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>Help Center</motion.a>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>Returns</motion.a>
                      <motion.a href="#" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }} whileHover={{ color: 'white', x: 5 }}>Shipping Info</motion.a>
                    </div>
                  </motion.div>
                </Col>
                <Col xs={24} md={6}>
                  <motion.div variants={fadeInUp}>
                    <Title level={4} style={{ color: 'white', marginBottom: 16 }}>Newsletter</Title>
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
                © 2024 Navlix. All rights reserved.
              </Paragraph>
            </motion.div>
          </div>
        </Footer>
      </motion.div>
    </Layout>
  )
}