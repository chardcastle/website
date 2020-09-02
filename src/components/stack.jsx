import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import crypto from 'crypto';
import {
  FaPhp, FaSymfony, FaNode, FaAws, FaBolt,
} from 'react-icons/fa';
import { SiMysql, SiZendframework } from 'react-icons/si';
import Divider from './divider';
import globalStyles from './global.module.css';

function Stack(props) {
  const { primary, secondary } = props;

  return (
    <section className={globalStyles.altAppSection} id="stack">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className={globalStyles.title}>Technologies</h2>
            <Divider type="line-default" />
          </Col>
        </Row>

        <Row>
          <Col xs={2} md={4} className={globalStyles.noStyle}>
            <ul>
              <li><FaAws size="4em" /></li>
              <li><SiMysql size="4em" /></li>
              <li><FaPhp size="4em" /></li>
            </ul>
          </Col>

          <Col xs={10} md={8} className={globalStyles.noStyle}>
            <ul>
              {primary.map((line) => (
                <li key={crypto.randomBytes(16).toString('hex')}>
                  <FaBolt size="1em" />
                  {line}
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={2} md={4} className={globalStyles.noStyle}>
            <ul>
              <li><FaSymfony size="4em" /></li>
              <li><SiZendframework size="4em" /></li>
              <li><FaNode size="4em" /></li>
            </ul>
          </Col>

          <Col xs={10} md={8} className={globalStyles.noStyle}>
            <ul>
              {secondary.map((line) => (
                <li key={crypto.randomBytes(16).toString('hex')}>
                  <FaBolt size="1em" />
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
