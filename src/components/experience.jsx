import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ExperienceList from './experienceList';
import Divider from './divider';
import styles from './global.module.css';

function Experience(props) {
  const { experiences } = props;

  return (
    <section id="experience" className={styles.appSection}>
      <Container>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={styles.title}>Experience</h2>
            <Divider type="line-default" />
          </div>
        </div>
        <div className="row">
          {experiences
              && <ExperienceList experiences={experiences} />}
        </div>
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
