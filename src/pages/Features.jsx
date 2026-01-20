import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Zap, Shield, RefreshCw, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Smart Workflow",
      desc: "AI-driven task prioritization that adapts to your unique working style.",
      icon: <Zap size={32} />,
      size: "large",
      color: "var(--accent-color)"
    },
    {
      title: "Real-time Sync",
      desc: "Instant updates across all devices.",
      icon: <RefreshCw size={24} />,
      size: "small",
      color: "#2cb67d"
    },
    {
      title: "Privacy-first",
      desc: "Zero-knowledge encryption for all your data.",
      icon: <Shield size={24} />,
      size: "small",
      color: "#3da9fc"
    },
    {
      title: "Cloud Performance",
      desc: "Serverless architecture for lightning-fast responsiveness and high availability.",
      icon: <Cpu size={32} />,
      size: "medium",
      color: "#ef4565"
    }
  ];

  return (
    <div id="features" className="py-5">
      <Container className="py-5">
        <div className="mb-5">
          <h2 className="display-4 fw-bold">Advanced <span className="text-gradient">Capabilities.</span></h2>
          <p className="text-secondary">Engineered for the modern professional.</p>
        </div>

        <div className="bento-grid">
          <Row className="g-4">
            {/* Main Feature - Large */}
            <Col lg={8}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card p-5 h-100 position-relative overflow-hidden"
              >
                <div className="mb-4" style={{ color: features[0].color }}>{features[0].icon}</div>
                <h3 className="h1 mb-3">{features[0].title}</h3>
                <p className="fs-5 text-secondary">{features[0].desc}</p>
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.1 }}>
                   <Zap size={200} />
                </div>
              </motion.div>
            </Col>

            {/* Small Features Column */}
            <Col lg={4}>
              <Row className="g-4 h-100">
                <Col xs={12} className="h-50">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass-card p-4 h-100"
                  >
                    <div className="mb-3" style={{ color: features[1].color }}>{features[1].icon}</div>
                    <h4 className="h5 mb-2">{features[1].title}</h4>
                    <p className="small text-secondary mb-0">{features[1].desc}</p>
                  </motion.div>
                </Col>
                <Col xs={12} className="h-50">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass-card p-4 h-100"
                  >
                    <div className="mb-3" style={{ color: features[2].color }}>{features[2].icon}</div>
                    <h4 className="h5 mb-2">{features[2].title}</h4>
                    <p className="small text-secondary mb-0">{features[2].desc}</p>
                  </motion.div>
                </Col>
              </Row>
            </Col>

            {/* Medium Feature */}
            <Col lg={12}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card p-4 d-flex align-items-center gap-4"
              >
                <div className="p-3 rounded-circle" style={{ background: 'rgba(239, 69, 101, 0.1)', color: '#ef4565' }}>
                  {features[3].icon}
                </div>
                <div>
                  <h3 className="h4 mb-1">{features[3].title}</h3>
                  <p className="mb-0 text-secondary">{features[3].desc}</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>

      <style>{`
        .bento-grid .glass-card {
           cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Features;
