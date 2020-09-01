import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect className={styles.bg} expand="lg" variant="dark">
      <Navbar.Brand href="#home" className={styles.title}>Chris Hardcastle</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="/cv/chris-hardcastle-cv.pdf" target="_blank">CV (PDF)</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#stack">Technologies</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
