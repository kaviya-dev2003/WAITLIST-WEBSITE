import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div id="home" className="hero-split">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="pe-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-flex align-items-center mb-4">
                <span className="section-dot"></span>
                <span className="text-secondary fw-semibold">COMING SOON</span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                The next evolution of <br />
                <span className="text-gradient">productivity.</span>
              </h1>
              <p className="fs-5 text-secondary mb-5" style={{ maxWidth: '500px' }}>
                Built for people who move fast. Streamline your workflow with NEXTDROP's 
                advanced intelligence and premium design.
              </p>

              <div className="glass-card p-4 d-inline-block w-100" style={{ maxWidth: '500px' }}>
                <Form className="d-flex gap-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-secondary text-white py-3 px-4"
                    style={{ borderRadius: '12px' }}
                  />
                  <button className="btn-primary-custom text-nowrap">
                    Get Early Access
                  </button>
                </Form>
                <div className="mt-4 pt-3 border-top border-secondary opacity-50 small">
                  <span>🔥 1,284 people already joined</span>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6} className="d-none d-lg-block position-relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="position-relative"
            >
              {/* Abstract CSS Shapes */}
              <div 
                style={{
                  width: '400px',
                  height: '400px',
                  background: 'var(--accent-color)',
                  filter: 'blur(100px)',
                  opacity: '0.3',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%'
                }}
              ></div>
              <div className="glass-card p-5 position-relative" style={{ height: '500px', transform: 'rotate(-5deg)' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--accent-color)', borderRadius: '10px', marginBottom: '20px' }}></div>
                <div style={{ width: '80%', height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginBottom: '15px' }}></div>
                <div style={{ width: '60%', height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginBottom: '40px' }}></div>
                
                <div className="grid mt-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  <div className="glass-card p-4" style={{ height: '120px', background: 'rgba(255,255,255,0.02)' }}></div>
                  <div className="glass-card p-4" style={{ height: '120px', background: 'rgba(255,255,255,0.02)' }}></div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
