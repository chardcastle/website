import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ExperienceList from './experienceList';
import Divider from './divider';

export default class Experience extends React.Component {
  static get propTypes() {
    return {
      experiences: PropTypes.object,
    };
  }

  render() {
    const { experiences } = this.props;

    return (
      <section id="experience">
        <Container>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Experience</h2>
              <Divider type="line-default" />
            </div>
          </div>
          <div className="row">
            {experiences &&
              <ExperienceList experiences={experiences}/>
            }
          </div>
        </Container>
      </section>
    )
  }
}
