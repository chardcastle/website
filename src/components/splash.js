import Container from 'react-bootstrap/Container';
import styles from './splash.module.css';

export default function Splash() {
  return (
    <header>
      <Container className={styles.splash}>
        <div className="row">
          <div className="col-lg-12">
            <img className="img-responsive" src="/img/profile.png?cache=1" alt="" />
              <div className={styles.introText}>
                <span className={styles.name}>Software Engineer</span>
                <hr className="code-light" />
                  <span className={styles.skills}>
                    PHP / Javascript&nbsp;&nbsp;
                    <i className="fa fa-star" />&nbsp;&nbsp;
                    API Developer&nbsp;&nbsp;
                    <i className="fa fa-star" />&nbsp;&nbsp;
                    QA / Automation Tester
                  </span>
              </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
