import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navigation.module.css';
import content from '../content';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect fixed="top" className={styles.bg} expand="lg" variant="dark">
      <Navbar.Brand href="#home" className={styles.title}>{content.appTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav className={styles.appNav}>
          <Nav.Link href="#about">
            {content.titleAbout}
          </Nav.Link>
          <Nav.Link href="/cv/chris-hardcastle-cv.pdf" target="_blank">
            {content.titleCvPDF}
          </Nav.Link>
          <Nav.Link href="#experience" className={styles.brandNavLink}>
            {content.titleExperience}
          </Nav.Link>
          <Nav.Link href="#stack" className={styles.brandNavLink}>
            {content.titleTechnologies}
          </Nav.Link>
          <Nav.Link href="#services" className={styles.brandNavLink}>
            {content.titleServices}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
