import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import styles from './experienceList.module.css';

const cx = require('classnames');
const debug = require('debug')('app');

function ExperienceList(props) {

  const [show, setShow] = useState(false);
  const { experiences } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const experienceThumbs = experiences.map((experience) =>
    <div className={cx('col-sm-4', styles.item)}>
      <a onClick={handleShow} className={styles.link}>
        <div className={styles.caption}>
          <div className={styles.content}>
            <i className="fa fa-search-plus fa-3x" />
          </div>
        </div>
        <img src={experience.thumbnail} className="img-responsive" alt="" />
      </a>
    </div>
  );

  const experiencePopupBodies = experiences.map((experience) =>
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{experience.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>As a Senior Developer designing, building and delivering API endpoints and scripts on public API’s within Eagle Eye’s AIR platform. These were MVP’s, custom and product features which handled requests from mobile apps, retail point of sale equipment (EPoS), CRM and retail systems all over the UK.</p>
        <p>Leading the team to design, build and deliver a legacy XML based EPoS API within the AIR platform, assisting and supporting the migration of new and existing well known high street retailers to this service. Expanding the solution to include EES digital wallet products and consumer search for JDSports.</p>
        <p>Writing console based scripts to import coupon and consumer data for clients such as Thomas Pink and Clarks. Other scripts I wrote searched for and reported on financial transactions, campaign activity and consumer data.</p>
        <p>Innovation with technologies such as Rabbit MQ was required to handle the extremely high volumes of data and API traffic.</p>
        <ul className="list-inline item-details">
          <li>Client:&nbsp;
            <strong>Eagle Eye Solutions
            </strong>
          </li>
          <li>Date:&nbsp;
            <strong>August 2016 - Present
            </strong>
          </li>
          <li>Skills used:&nbsp;
            <strong>PHP, MySQL, RabbitMQ, Javascript, Docker, Swagger, JSON
            </strong>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <i className="fa fa-times" /> Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      {experienceThumbs}
      {experiencePopupBodies}
    </>
  )
}

export default ExperienceList;
