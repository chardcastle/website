import Container from 'react-bootstrap/Container';
import styles from './splash.module.css';
import Divider from './divider';

export default function Splash() {
  return (
    <header className={styles.splash}>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <img className={styles.imgCentered} src="/img/profile.png?cache=1" alt="" />
              <div className={styles.introText}>
                <span className={styles.name}>Software Engineer</span>
                <Divider />
                  <span className={styles.skills}>
                    PHP / Javascript&nbsp;&nbsp;
                    <i className="fa fa-star" />&nbsp;&nbsp;
                    API Developer&nbsp;&nbsp;
                    <i className="fa fa-star" />&nbsp;&nbsp;
                    Amazon web services
                  </span>
              </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
