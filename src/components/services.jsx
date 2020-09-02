import PropTypes from 'prop-types';
import Divider from './divider';
import globalStyles from './global.module.css';
import TitledList from './titledList';

function Services(props) {
  const { services } = props;

  return (
    <section id="services" className={globalStyles.appSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={globalStyles.title}>My services</h2>
            <Divider type="line-default" />
          </div>
        </div>
        <div className="row">
          <TitledList title="I am" listItems={services.affirmations} />
          <TitledList title="I know" listItems={services.knowledge} />
          <TitledList title="I can" listItems={services.abilities} />
        </div>
      </div>
    </section>
  );
}

Services.propTypes = {
  services: PropTypes.shape({
    abilities: PropTypes.arrayOf(PropTypes.string),
    affirmations: PropTypes.arrayOf(PropTypes.string),
    knowledge: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Services;
