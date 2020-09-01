import PropTypes from 'prop-types';
import ExperienceItem from './experienceItem';

function ExperienceList(props) {
  const { experiences } = props;

  const experienceThumbs = experiences
    .map((experience) => <ExperienceItem experience={experience} />);

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
