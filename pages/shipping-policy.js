import { Typography, Card } from 'antd'
import { motion } from 'framer-motion'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography

export default function ShippingPolicy() {
  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Nevlix Shipping Policy
          </Title>
          
          <Card>
            <Title level={3}>Delivery Time</Title>
            <Paragraph>
              Orders are processed and shipped within 1-3 business days. Products are delivered within 5 working days after dispatch.
            </Paragraph>
            
            <Title level={3}>Shipping Charges</Title>
            <Paragraph>
              Applicable shipping fees are displayed at checkout. Free shipping may apply for specific promotions or order thresholds.
            </Paragraph>
            
            <Title level={3}>Order Tracking</Title>
            <Paragraph>
              Once shipped, you will receive a tracking number via email or SMS to monitor your delivery status.
            </Paragraph>
            
            <Title level={3}>Delivery Issues</Title>
            <Paragraph>
              Nevlix is not responsible for delays caused by external factors like weather or customs.
            </Paragraph>
            
            <Title level={3}>Incorrect Information</Title>
            <Paragraph>
              Please ensure accurate address details. Nevlix is not liable for delays or losses due to incorrect shipping information.
            </Paragraph>
            
            <Title level={3}>Damaged Products</Title>
            <Paragraph>
              If your order arrives damaged, contact us immediately with photos for a replacement or refund.
            </Paragraph>
            
            <Paragraph style={{ marginTop: 32, textAlign: 'center', fontWeight: 'bold' }}>
              For further assistance, reach out to us via the "Contact Us" section on our website.
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </CommonLayout>
  )
}