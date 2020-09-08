import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Divider from './divider';
import ExperienceList from './experienceList';
import styles from './global.module.css';

function Experience(props) {
  const { experiences } = props;

  return (
    <section id="experience" className={styles.appSection}>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className={`${styles.title} ${styles.styledFont}`}>Experience</h2>
            <Divider type="line-default" />
          </Col>
        </Row>
        <Row>
          {experiences
              && <ExperienceList experiences={experiences} />}
        </Row>
      </Container>
    </section>
  );
}

Experience.propTypes = {
  experiences: PropTypes.shape([
    PropTypes.shape({ title: PropTypes.string }),
  ]).isRequired,
};

export default Experience;
