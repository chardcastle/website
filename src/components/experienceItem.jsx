import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import styles from './experienceItem.module.css';

function ExperienceItem(props) {
  const { experience } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName={styles.experienceDescription}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{experience.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {experience.paragraphs && experience.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
          <br />
          {experience.lists && experience.lists.map((list, i) => (
            <ul>
              <li><strong>{list.listTitle}</strong></li>
              <li>{list.listValues}</li>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="fa fa-times" />
            {' '}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ExperienceItem.propTypes = {
  experience: PropTypes.objectOf({
    title: PropTypes.string,
    lists: PropTypes.array,
    paragraphs: PropTypes.array,
  }).isRequired,
};

export default ExperienceItem;
