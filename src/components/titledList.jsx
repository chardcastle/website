import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import crypto from 'crypto';
import globalStyles from './global.module.css';
import styles from './titledList.module.css';
import TitledListItem from './titledListItem';

function TitledList(props) {
  const { listItems, title, type } = props;

  return (
    <Col className={styles.titledList} sm={12} md={4}>
      <h3 className={`${styles.title} ${globalStyles.styledFont}`}>
        {title}
      </h3>
      <ul>
        {listItems.map((line) => (
          <TitledListItem
            key={crypto.randomBytes(16).toString('hex')}
            type={type}
            line={line}
          />
        ))}
      </ul>
    </Col>
  );
}

TitledList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TitledList;
