import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import crypto from 'crypto';
import {
  FaPhp, FaDocker, FaSymfony, FaNode, FaAws, FaBolt, FaLinux,
} from 'react-icons/fa';
import { SiMysql, SiZendframework } from 'react-icons/si';
import Divider from './divider';
import globalStyles from './global.module.css';
import styles from './stack.module.css';

function Stack(props) {
  const { primary, secondary } = props;

  return (
    <section className={globalStyles.altAppSection} id="stack">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className={`${globalStyles.title} ${globalStyles.styledFont}`}>Technologies</h2>
            <Divider type="line-default" />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><FaPhp title="PHP" /></Col>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><FaSymfony title="Symfony" /></Col>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><SiMysql title="Mysql" /></Col>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><FaNode title="Node.js" /></Col>
          <Col xs={12} lg={8} className={styles.statements}>
            <ul>
              {primary.map((line) => (
                <li key={crypto.randomBytes(16).toString('hex')}>
                  <FaBolt size="1em" />
                  {line}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><FaAws title="Amazon Web Services" /></Col>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><SiZendframework title="Zend PHP Framework" /></Col>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><FaLinux title="Linux" /></Col>
          <Col xs={6} md={3} lg={1} className={styles.techIcon}><FaDocker title="Docker" /></Col>
          <Col xs={12} lg={8} className={styles.statements}>
            <ul>
              {secondary.map((line) => (
                <li key={crypto.randomBytes(16).toString('hex')}>
                  <FaBolt size="1em" className={styles.statementIcon} />
                  {line}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Stack.propTypes = {
  primary: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondary: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stack;
