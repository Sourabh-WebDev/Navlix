import { Typography, Card } from 'antd'
import { motion } from 'framer-motion'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography

export default function TermsConditions() {
  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Terms and Conditions for Nevlix tea Products
          </Title>

          <Card>
            <Title level={3}>1. Introduction</Title>
            <Paragraph>
              Welcome to Navlix! By accessing or using our services, you agree to be bound by these terms and conditions. These terms outline the rules and regulations for using Nevlix's website, applications, and purchasing our tea products.
            </Paragraph>

            <Title level={3}>2. Privacy Policy</Title>
            <Paragraph>
              Your privacy is important to us. By using our services, you consent to our privacy policy outlined in the "Collection of Information by Nevlix" section. We collect, use, and safeguard personal information as described in the Privacy Policy.
            </Paragraph>

            <Title level={3}>3. Product Information</Title>
            <Paragraph>
              <strong>Quality Assurance:</strong> Nevlix guarantees that all tea products meet high-quality standards. However, slight variations in taste and appearance may occur due to the nature of tea beans.
            </Paragraph>
            <Paragraph>
              <strong>Product Descriptions:</strong> We strive to provide accurate descriptions, but Nevlix does not guarantee that all product descriptions are error-free or complete.
            </Paragraph>
            <Paragraph>
              <strong>Pricing:</strong> Prices are subject to change without notice. Discounts and promotions may apply for specific periods as per company discretion.
            </Paragraph>

            <Title level={3}>4. Orders and Payments</Title>
            <Paragraph>
              <strong>Order Confirmation:</strong> All orders are subject to acceptance and availability. You will receive a confirmation email once your order is accepted.
            </Paragraph>
            <Paragraph>
              <strong>Payment Methods:</strong> Payments can be made via authorized payment gateways. We do not store your financial information.
            </Paragraph>
            <Paragraph>
              <strong>Cancellations and Refunds:</strong> Orders can be canceled or modified before shipment. Refunds will be processed as per our refund policy for defective or damaged products.
            </Paragraph>

            <Title level={3}>5. Shipping and Delivery</Title>
            <Paragraph>
              <strong>Delivery Timeline:</strong> Estimated delivery timelines depend on your location and shipping method. Nevlix is not responsible for delays caused by external factors like weather or courier issues.
            </Paragraph>
            <Paragraph>
              <strong>Shipping Costs:</strong> Shipping costs, if applicable, will be displayed during checkout.
            </Paragraph>

            <Title level={3}>6. Customer Responsibilities</Title>
            <Paragraph>
              <strong>Accuracy of Information:</strong> Customers must provide accurate and up-to-date contact and shipping information.
            </Paragraph>
            <Paragraph>
              <strong>Usage:</strong> Products are intended for personal use only and not for resale unless explicitly authorized by Nevlix.
            </Paragraph>

            <Title level={3}>7. Security and Data Protection</Title>
            <Paragraph>
              We prioritize your data security by employing reasonable measures to protect your personal information. However, we cannot guarantee complete data security and encourage customers to notify us immediately in case of security concerns.
            </Paragraph>

            <Title level={3}>8. Limitation of Liability</Title>
            <Paragraph>
              Nevlix is not liable for indirect, incidental, or consequential damages arising from the use of our products or services. Our liability is limited to the value of the product purchased.
            </Paragraph>

            <Title level={3}>9. Modifications to Terms</Title>
            <Paragraph>
              We reserve the right to update or modify these terms and conditions at any time without prior notice. Continued use of our services indicates your acceptance of the updated terms.
            </Paragraph>

            <Title level={3}>10. Governing Law</Title>
            <Paragraph>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Nevlix operates.
            </Paragraph>

            <Title level={3}>11. Contact Information</Title>
            <Paragraph>
              For any questions, concerns, or feedback regarding our products, services, or these terms and conditions, please contact us through the "Contact Us" section on our website.
            </Paragraph>

            <Paragraph style={{ marginTop: 32, textAlign: 'center', fontWeight: 'bold' }}>
              By using Nevlix services, you acknowledge and agree to these terms and conditions. Thank you for choosing Nevlix!
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </CommonLayout>
  )
}