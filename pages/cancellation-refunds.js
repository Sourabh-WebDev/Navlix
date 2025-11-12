import { Typography, Row, Col, Card, Divider } from 'antd'
import { motion } from 'framer-motion'
import CommonLayout from '../components/Layout'

const { Title, Paragraph } = Typography

export default function CancellationRefunds() {
  return (
    <CommonLayout>
      <div style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={1} style={{ textAlign: 'center', marginBottom: 40 }}>
            Cancellation and Refunds Policy
          </Title>
          
          <Row gutter={[24, 24]}>
            <Col xs={24}>
              <Card title="Cancellation">
                <Title level={4}>When the cancellation is done by Nevlix itself</Title>
                <Paragraph>
                  We reserve the right to cancel or reject any order for various reasons, such as limited stock, errors or inaccuracies in product or pricing information, among others. Should any cancellation occur, we will promptly notify you, and any charged amount will be refunded only in the store account, which can be used by the customer within a year. Whether it is prepaid or cash paid on delivery, customer will get paid amount refunded within 3-4 working days in their store account.
                </Paragraph>
                
                <Title level={4}>When the cancellation is done by the customer</Title>
                <Paragraph>
                  You have the option to cancel your entire order or specific items within the order before its shipping and billing.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24}>
              <Card title="Refund">
                <Paragraph>
                  In the refund section we will refund amount only in the store account, which can be used by the customer within a year. Whether it is prepaid or cash paid on delivery, customer will get paid amount refunded within 3-4 working days in their store account - credit section.
                </Paragraph>
                <Paragraph>
                  To avoid confusion and transaction issues and money loss behind all the hired services such as delivery, packaging expenses and other factors.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24}>
              <Card title="Return Policy">
                <Title level={4}>What is the duration of the return policy of Nevlix?</Title>
                <Title level={5} style={{ color: '#1890ff' }}>7 DAYS RETURN / REPLACEMENT POLICY</Title>
                <Paragraph>
                  Our return policy allows you to request a hassle-free return within 7 days from the delivery date of the product. We understand the importance of customer satisfaction and aim to make your return process simple and easy for your convenience. If you find any challenges in submitting your request, you can reach out to us by calling +91-7982995541 or Email us at wecare@nevlix.com.
                </Paragraph>
                
                <Title level={4}>What steps should I take if I receive a damaged or missing product?</Title>
                <Paragraph>
                  • If you receive damaged or missing product(s), kindly initiate a return/replacement request within 48 hours from the delivery date.
                </Paragraph>
                <Paragraph>
                  • Please allow us 48 working hours to assess your request. Meanwhile please share the images of the packaging and products to wecare@nevlix.com or contact us at +91 7982995541 within the initial 48 hours (excluding gazetted holidays and Sundays).
                </Paragraph>
                <Paragraph>
                  • Upon review, we will arrange for our courier partner to collect the damaged product(s) from your location, addressing the issue accordingly.
                </Paragraph>
                <Paragraph>
                  • If reverse pick-up service is unavailable in your location, kindly arrange for the self-shipment of the product through a reliable courier partner.
                </Paragraph>
                <Paragraph>
                  • Upon receiving your product(s), we will verify it against the claim and proceed with the replacement or refund as applicable.
                </Paragraph>
                <Paragraph strong>
                  Note: It is suggested to please be cautious while receiving your order. For added security, consider making an unboxing video upon delivery.
                </Paragraph>
                
                <Title level={4}>If my order shows "delivered" but I haven't received it, what should I do?</Title>
                <Paragraph>
                  If your order status claims it's delivered, but you haven't received your product. Raise a request within 48 hours from the date of order status update. It will take us 48 working hours to review your request. Kindly allow us 3-4 working days to look into your concern.
                </Paragraph>
                
                <Title level={4}>Under what conditions can I return/replace my product?</Title>
                <Paragraph>
                  • Wrong product delivered<br/>
                  • Expired product delivered<br/>
                  • Damaged product delivered – Physical damage/tampered product or packaging<br/>
                  • Incomplete order – missing products<br/>
                  • Opened/used/altered products
                </Paragraph>
              </Card>
            </Col>
          </Row>
          
          <Divider />
          
          <Card style={{ marginTop: 24, textAlign: 'center' }}>
            <Title level={3}>Need Help?</Title>
            <Paragraph>
              For any questions regarding cancellations or refunds, please contact our customer support team.
            </Paragraph>
            <Paragraph strong>
              Email: wecare@nevlix.com | Phone: +91-7982995541
            </Paragraph>
          </Card>
        </motion.div>
      </div>
    </CommonLayout>
  )
}