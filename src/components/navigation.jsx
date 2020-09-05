import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cx from 'classnames';
import styles from './navigation.module.css';
import globalStyles from './global.module.css';
import content from '../content';

export default function Navigation() {
  return (
    <>
      <style type="text/css">
        {`
/* change the link color and add padding for height */
.navbar-custom .navbar-nav .nav-link {
    letter-spacing: 1px;
    padding: 10px;
}
.show > .nav-link,
.active > .nav-link,
.nav-link.show,
.nav-link.active {
  background: #1a242f;
}
.navbar {
  padding: 0
}
@media (min-width: 992px) {
  .navbar {
    padding: 20px 0;
  }
}
.navbar-custom .navbar-toggler {
    margin-right: 15px;
    padding: 9px 10px;
    margin-top: 13px;
    margin-bottom: 13px;
    background-color: transparent;
    background-image: none;
    border: 1px solid #1a242f;
    border-radius: 4px;
    color: #fff;
    font-size: 1em;
}
.navbar-custom .navbar-toggler {
  background: transparent;
}
.navbar-custom .navbar-toggler:focus {
    outline: 0;
}
.navbar-custom .navbar-toggler:hover,
.navbar-custom .navbar-toggler:active {
    background-color: #1a242f;
}



`}
      </style>
    <Navbar collapseOnSelect fixed="top" className={cx(styles.bg, 'navbar-custom')} expand="lg" variant="dark">
      <Navbar.Brand href="#home" className={cx(globalStyles.title, styles.navbarBrand)}>{content.appTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about" className={styles.appNavLink}>
            {content.titleAbout}
          </Nav.Link>
          <Nav.Link href="/cv/chris-hardcastle-cv.pdf" target="_blank" className={styles.appNavLink}>
            {content.titleCvPDF}
          </Nav.Link>
          <Nav.Link href="#experience" className={styles.appNavLink}>
            {content.titleExperience}
          </Nav.Link>
          <Nav.Link href="#stack" className={styles.appNavLink}>
            {content.titleTechnologies}
          </Nav.Link>
          <Nav.Link href="#services" className={styles.appNavLink}>
            {content.titleServices}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </>
  );
}
