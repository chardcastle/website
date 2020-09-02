import PropTypes from 'prop-types';
import {
  Col, Row, Container, ListGroup,
} from 'react-bootstrap';
import cx from 'classnames';
import {
  FaLinkedin, FaTwitter, FaGithub, FaSoundcloud,
} from 'react-icons/fa';
import globalStyles from './global.module.css';
import styles from './footer.module.css';

function Footer(props) {
  const { content } = props;

  return (
    <footer className={cx('text-center', styles.appFooter)}>
      <Container className={styles.footerAbove} fluid>
        <Row>
          <Col>
            <h3 className={globalStyles.title}>Location</h3>
            <p>London, UK</p>
            <p>{content}</p>
          </Col>
          <Col className={globalStyles.noStyle}>
            <h3 className={globalStyles.title}>Around the Web</h3>
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
      <Container className={styles.footerBelow} fluid>
        <Row>
          <Col>
            Copyright &#169; Chris Hardcastle 2020
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Footer;
