import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import globalStyles from './global.module.css';
import styles from './titledList.module.css';
import TitledListItem from './titledListItem';

function TitledList(props) {
  const { listItems, title, type } = props;

  return (
    <Col className={styles.titledList}>
      <h3 className={`${styles.title} ${globalStyles.styledFont}`}>
        {title}
      </h3>
      <ul>
        {listItems.map((line) => <TitledListItem type={type} line={line} />)}
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
