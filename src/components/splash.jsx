import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ImStarFull } from 'react-icons/im';
import PropTypes from 'prop-types';
import styles from './splash.module.css';
import globalStyles from './global.module.css';
import Divider from './divider';

function Splash(props) {
  const { content, isNavOpen } = props;
  const columnClassName = isNavOpen ? styles.adaptsToNavOpen : '';

  return (
    <header className={styles.splash}>
      <Container>
        <Row>
          <Col className={columnClassName}>
            <img className={styles.imgCentered} src="/img/profile.png?cache=3" alt="" />
            <h1 className={`${styles.title} ${globalStyles.styledFont}`}>{content.splashTitle}</h1>
            <Divider type="line-primary" />
            <span className={styles.summary}>
              {content.splashHeadlineOne}
              <ImStarFull className={styles.highLight} />
              {content.splashHeadlineTwo}
              <ImStarFull className={styles.highLight} />
              {content.splashHeadlineThree}
            </span>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

Splash.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  content: PropTypes.shape({
    splashTitle: PropTypes.string,
    splashHeadlineOne: PropTypes.string,
    splashHeadlineTwo: PropTypes.string,
    splashHeadlineThree: PropTypes.string,
  }).isRequired,
};

export default Splash;
