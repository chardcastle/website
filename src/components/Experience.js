import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './experience.module.css';
import ExperienceList from './experienceList';
import getConfig from 'next/config'

const { visibleExperiences } = getConfig();

function Experience(props) {
    return (
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Experience</h2>
              <hr className="code-primary" />
            </div>
          </div>
          <div className="row">
            <ExperienceList items={visibleExperiences} content={props.content} />
          </div>
        </div>
      </section>
    )
}

export default Experience;


