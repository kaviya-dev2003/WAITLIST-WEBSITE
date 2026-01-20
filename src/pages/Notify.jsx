import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Notify = () => {
  return (
    <div id="notify" className="py-5 border-top border-secondary border-opacity-10">
      <Container className="py-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-width-container mx-auto"
          style={{ maxWidth: '700px' }}
        >
          <h2 className="display-4 fw-bold mb-4">Be the first to <span className="text-gradient">experience it.</span></h2>
          <p className="fs-5 text-secondary mb-5">
            Join the elite circle of early adopters and help shape the future of productivity. 
            No spam, just exclusive updates.
          </p>

          <div className="glass-card p-2 p-md-3 mx-auto" style={{ maxWidth: '600px' }}>
            <Form className="d-flex flex-column flex-md-row gap-3">
              <Form.Control
                type="email"
                placeholder="Secure your spot (email)"
                className="bg-transparent border-0 text-white py-3 px-4 shadow-none"
                style={{ fontSize: '1.1rem' }}
              />
              <button className="btn-primary-custom py-3 px-5 fs-5">
                Notify Me
              </button>
            </Form>
          </div>

          <div className="mt-5 d-flex justify-content-center gap-4 opacity-50 grayscale">
            <span className="small">Twitter</span>
            <span className="small">Discord</span>
            <span className="small">ProductHunt</span>
          </div>

          <div className="mt-4 text-secondary small">
            Built with ❤️ by NEXTDROP Team
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Notify;
