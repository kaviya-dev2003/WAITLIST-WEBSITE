import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ProductStory = () => {
  const storyBlocks = [
    {
      title: "The Problem",
      text: "Current productivity tools are bloated, slow, and lack the premium feel that modern creators deserve.",
      align: "left"
    },
    {
      title: "Why They Fail",
      text: "They prioritize features over focus, burying your important tasks under layers of unnecessary menus.",
      align: "right"
    },
    {
      title: "The NEXTDROP Way",
      text: "We've stripped away the noise to build a tool that moves as fast as you do. Pure performance, zero compromise.",
      align: "left"
    }
  ];

  return (
    <div id="story" className="py-5" style={{ background: 'linear-gradient(180deg, var(--bg-color) 0%, #121217 100%)' }}>
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Built for the <span className="text-gradient">Elite.</span></h2>
          <p className="text-secondary">Crafting the future of high-performance workflows.</p>
        </div>

        <div className="story-timeline position-relative">
          {storyBlocks.map((block, index) => (
            <Row key={index} className={`mb-5 pb-5 align-items-center ${block.align === 'right' ? 'flex-row-reverse' : ''}`}>
              <Col lg={5}>
                <motion.div
                  initial={{ opacity: 0, x: block.align === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-5"
                >
                  <h3 className="mb-3 text-gradient">{block.title}</h3>
                  <p className="fs-5 text-secondary mb-0">{block.text}</p>
                </motion.div>
              </Col>
              <Col lg={2} className="d-none d-lg-flex justify-content-center position-relative">
                <div style={{ width: '2px', height: '100%', background: 'rgba(255,255,255,0.05)', position: 'absolute' }}></div>
                <div style={{ width: '12px', height: '12px', background: 'var(--accent-color)', borderRadius: '50%', zIndex: 1, border: '4px solid #121217' }}></div>
              </Col>
              <Col lg={5}></Col>
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductStory;
