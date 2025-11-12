import { Typography, Card } from 'antd'
import { motion } from 'framer-motion'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography

export default function PrivacyPolicy() {
  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Privacy Policy
          </Title>
          
          <Card>
            <Title level={3}>Collection of Information by Nevlix</Title>
            <Paragraph>
              Nevlix cares about your privacy and wants you to be familiar with how we collect, use, and disclose information. This Privacy Policy describes our practices in connection with information that we or our service providers collect through the website or application (hereinafter the "Service") operated and controlled by us from which you are accessing this Privacy Policy. By providing personal information to us or by using the Service, you acknowledge that you have read and understand this Privacy Policy.
            </Paragraph>
            
            <Title level={3}>Information Shared By the Customer</Title>
            <Paragraph>
              If you have chosen to provide us with your contact information, we may provide you with service-related announcements by any means, including email, concerning the website or contact you regarding your customer service requests or questions. For example, all registered users will receive a welcoming email to confirm their registration. These types of communications are necessary to serve you, respond to your concerns and to provide a high level of customer service.
            </Paragraph>
            
            <Title level={3}>The Use of Information Shared By the Customer</Title>
            <Paragraph>
              We may use your personal information you have chosen to give us to provide you with customized service and use of our website. For example, we may suggest products that would be of interest to you. Such customized information may be conveyed to you by way of emails or text messages/SMS and phone calls for your convenience & ease of selecting Nevlix products and services.
            </Paragraph>
            
            <Title level={3}>Security of Your Information</Title>
            <Paragraph>
              We seek to use reasonable organizational, technical, and administrative measures designed to protect personal information under our control. Unfortunately, no data transmission over the internet or data storage system can be guaranteed to be 100% secure. If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of any account you have with us has been compromised), please immediately notify us in accordance with the "Contacting Us" section on the website.
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </CommonLayout>
  )
}