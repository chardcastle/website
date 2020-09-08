import Container from 'react-bootstrap/Container';
import cx from 'classnames';
import { ImStarFull } from 'react-icons/im';
import styles from './splash.module.css';
import globalStyles from './global.module.css';
import Divider from './divider';

function Splash() {
  return (
    <header className={styles.splash}>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <img className={styles.imgCentered} src="/img/profile.png?cache=2" alt="" />
            <span className={cx(styles.title, globalStyles.styledFont)}>Software Engineer</span>
            <Divider type="line-primary" />
            <span className={styles.summary}>
              PHP / Node.js
              <ImStarFull className={styles.highLight} />
              API / Apps
              <ImStarFull className={styles.highLight} />
              Amazon web services
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Splash;
