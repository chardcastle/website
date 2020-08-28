import React from 'react';
import Container from 'react-bootstrap/Container';
import ExperienceList from './experienceList';
import Divider from './divider';

function Experience(props) {
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
            <ExperienceList experiences={props.content.experiences} />
          </div>
        </Container>
      </section>
    )
}

export default Experience;


