import PropTypes from 'prop-types';
import {
  Col, Row, Container, ListGroup,
} from 'react-bootstrap';
import {
  FaLinkedin, FaTwitter, FaGithub, FaSoundcloud,
} from 'react-icons/fa';
import globalStyles from './global.module.css';
import styles from './footer.module.css';

function Footer(props) {
  const { content } = props;

  return (
    <footer className={`text-center ${styles.appFooter}`}>
      <Container>
        <Row>
          <Col sm={12} md={6} className={styles.inner}>
            <h3 className={`${globalStyles.footerTitle} ${globalStyles.styledFont}`}>Location</h3>
            <p>{content.location}</p>
          </Col>
          <Col sm={12} md={6} className={`${globalStyles.noStyle}, ${styles.inner}`}>
            <h3 className={`${globalStyles.footerTitle} ${globalStyles.styledFont}`}>Around the Web</h3>
            <Row>
              <ListGroup horizontal className={styles.listGroup}>
                <ListGroup.Item className={styles.listGroupItem}>
                  <a href="https://uk.linkedin.com/in/chardcastle" rel="noreferrer" target="_blank">
                    <FaLinkedin size="2em" />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listGroupItem}>
                  <a href="https://twitter.com/hardcastle" rel="noreferrer" target="_blank">
                    <FaTwitter size="2em" />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listGroupItem}>
                  <a href="https://github.com/chardcastle" rel="noreferrer" target="_blank">
                    <FaGithub size="2em" />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listGroupItem}>
                  <a href="https://soundcloud.com/memesmusic" rel="noreferrer" target="_blank">
                    <FaSoundcloud size="2em" />
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={styles.footerBelow}>
        <Row>
          <Col>
            {content.copyright}
            &#169;
            {' '}
            { content.signature }
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  content: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
    signature: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
