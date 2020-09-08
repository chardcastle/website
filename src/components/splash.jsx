import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ImStarFull } from 'react-icons/im';
import styles from './splash.module.css';
import globalStyles from './global.module.css';
import Divider from './divider';

function Splash() {
  return (
    <header className={styles.splash}>
      <Container>
        <Row>
          <Col>
            <img className={styles.imgCentered} src="/img/profile.png?cache=2" alt="" />
            <span className={`${styles.title}, ${globalStyles.styledFont}`}>Software Engineer</span>
            <Divider type="line-primary" />
            <span className={styles.summary}>
              PHP / Node.js
              <ImStarFull className={styles.highLight} />
              API / Apps
              <ImStarFull className={styles.highLight} />
              Amazon web services
            </span>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Splash;
