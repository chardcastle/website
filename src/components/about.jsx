import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import globalStyles from './global.module.css';
import Divider from './divider';

function About(props) {
  const { content } = props;

  return (
    <section className={globalStyles.altAppSection} id="about">
      <Container>
        <Row>
          <Col className="col-lg-12 text-center">
            <h2 className={globalStyles.title}>About</h2>
            <Divider type="line-default" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>{content}</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button href="/cv/chris-hardcastle-cv.pdf" target="_blank" variant="light" size="lg">
              <i className="fa fa-file-pdf-o" />
              &nbsp;Download CV (PDF)
            </Button>
            <br />
            <br />
            <Button href="/cv/chris-hardcastle-cv.docx" target="_blank" variant="secondary" size="sm">
              <i className="fa fa-file-word-o" />
              &nbsp;Download CV (Word)
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default About;
