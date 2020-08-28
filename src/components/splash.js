import Container from 'react-bootstrap/Container';
import styles from './splash.module.css';
import Divider from './divider';
const cx = require('classnames');

export default function Splash() {
  return (
    <header className={styles.splash}>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <img className={styles.imgCentered} src="/img/profile.png?cache=1" alt="" />
              <div className={styles.heading}>
                <span className={styles.title}>Software Engineer</span>
                <Divider type="line-primary"/>
                  <span className={styles.summary}>
                    PHP / Javascript&nbsp;&nbsp;
                    <i className={cx('fa', 'fa-star', styles.highLight)} />&nbsp;&nbsp;
                    API Developer&nbsp;&nbsp;
                    <i className={cx('fa', 'fa-star', styles.highLight)} />&nbsp;&nbsp;
                    Amazon web services
                  </span>
              </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
