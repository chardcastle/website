import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import crypto from 'crypto';
import styles from './experienceItem.module.css';
import globalStyles from './global.module.css';

function ExperienceItem(props) {
  const { experience } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <Col sm={12} md={6} lg={4} className={styles.item}>
      <a href={`/${experience.slug}`} onClick={handleShow} className={styles.link}>
        <div className={styles.caption}>
          <div className={styles.content}>
            <i className="fa fa-search-plus fa-3x" />
          </div>
        </div>
        <img src={experience.thumbnail} className="img-responsive" alt="" />
      </a>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        dialogClassName={styles.experienceDescription}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className={`${globalStyles.title} ${globalStyles.styledFont} ${styles.title}`}>
              {experience.title}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {experience.paragraphs && experience.paragraphs.map((paragraph) => (
            <p key={crypto.randomBytes(16).toString('hex')}>{paragraph}</p>
          ))}
          <br />
          {experience.lists && (
          <ul>
            {experience.lists.map((list) => (
              <li key={crypto.randomBytes(16).toString('hex')}>
                <strong>{list.listTitle}</strong>
                <br />
                {list.listValues}
              </li>
            ))}
          </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="fa fa-times" />
            {' '}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

ExperienceItem.propTypes = {
  experience: PropTypes.exact({
    title: PropTypes.string,
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    lists: PropTypes.arrayOf(PropTypes.shape({
      listTitle: PropTypes.string,
      listValues: PropTypes.string,
    })),
    paragraphs: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
};

export default ExperienceItem;
