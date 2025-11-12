import { Typography, Card } from 'antd'
import { motion } from 'framer-motion'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography

export default function LegalDisclaimer() {
  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Nevlix Legal Disclaimer
          </Title>
          
          <Card>
            <Title level={3}>Product Information</Title>
            <Paragraph>
              While we strive to ensure all product descriptions, images, and details are accurate, Nevlix does not guarantee that all information is error-free, complete, or up to date. Variations in taste, appearance, or packaging may occur due to the nature of coffee products.
            </Paragraph>
            
            <Title level={3}>Health Disclaimer</Title>
            <Paragraph>
              Nevlix products are not intended to diagnose, treat, cure, or prevent any medical conditions. Consult a healthcare professional before consuming our products if you have any medical concerns or dietary restrictions.
            </Paragraph>
            
            <Title level={3}>Limitation of Liability</Title>
            <Paragraph>
              Nevlix is not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products. Our liability is limited to the purchase price of the product.
            </Paragraph>
            
            <Title level={3}>Third-Party Services</Title>
            <Paragraph>
              Nevlix is not responsible for services or products offered by third-party vendors or links provided on our website. Use them at your own risk.
            </Paragraph>
            
            <Title level={3}>Legal Compliance</Title>
            <Paragraph>
              Nevlix operates in compliance with local laws and regulations. It is the customer's responsibility to ensure the legality of purchasing and importing our products in their location.
            </Paragraph>
            
            <Title level={3}>Changes to Policies</Title>
            <Paragraph>
              Nevlix reserves the right to modify this disclaimer or any related policies without prior notice. Continued use of our services indicates acceptance of any updates.
            </Paragraph>
            
            <Paragraph style={{ marginTop: 32, textAlign: 'center', fontWeight: 'bold' }}>
              For further information or clarification, please refer to our "Contact Us" section on the website.
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </CommonLayout>
  )
}