import PropTypes from 'prop-types';
import ExperienceItem from './experienceItem';

function ExperienceList(props) {
  const { experiences } = props;

  const experienceThumbs = experiences
    .map((experience) => experience.isVisible && (
    <ExperienceItem
      key={experience.slug}
      experience={experience}
    />
    ));

  return (
    <>
      {experienceThumbs}
    </>
  );
}

ExperienceList.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ExperienceList;
