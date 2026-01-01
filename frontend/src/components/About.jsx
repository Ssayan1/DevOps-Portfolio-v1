import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                Hello, I’m Sayan Sanki, an aspiring Junior Cloud / DevOps Engineer with strong hands-on experience in Linux, Docker, Docker Compose, Kubernetes fundamentals, and monitoring tools like Prometheus and Grafana.

              </p>

              <h4 className="mt-4">Learning Journey</h4>
              <p>
                I’m actively developing my skills through hands-on projects and structured learning programs. As part of the #90DaysOfDevOps challenge with AI & self study, I’m gaining practical experience with essential DevOps tools and methodologies.
              </p>
              <p>
                I enjoy building production-like systems, containerizing applications, setting up monitoring, and troubleshooting real infrastructure issues. I am actively preparing for entry-level DevOps roles in 2025.

              </p>

              <h4 className="mt-4">DevOps Mindset</h4>
              <p>
                I believe DevOps revolves around continuous improvement, automation, and collaboration. As a fresher, I dedicate myself to applying my knowledge through real projects, optimizing workflows, and staying updated on emerging technologies.
              </p>

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I document my learning journey and insights on <a href="https://sayan-g.hashnode.dev/" target="_blank" rel="noopener noreferrer"><u>Hashnode</u></a>, sharing practical solutions and challenges encountered in the DevOps space.
              </p>

              <h4 className="mt-4">Interests</h4>
              <p>
                Beyond work, I enjoy exploring emerging technologies, engaging with tech communities, and staying abreast of trends in cloud-native development, system design, and infrastructure automation.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                Feel free to reach out via email at <a href="mailto:sayansanki1997@gmail.com">sayansanki1997@gmail.com</a>. I’m open to collaboration, mentorship, and opportunities in DevOps and cloud engineering.
              </p>
            </Card.Body>



          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;