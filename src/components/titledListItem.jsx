import crypto from 'crypto';
import PropTypes from 'prop-types';
import { GoPerson, GoTools } from 'react-icons/go';
import { FaRegLightbulb } from 'react-icons/fa';
import constants from '../constants';
import styles from './titledList.module.css';

function TitledListItem(props) {
  const { type, line } = props;

  return (
    <li key={crypto.randomBytes(16).toString('hex')}>
      {type === constants.SECTION_AFFIRMATIONS && <GoPerson className={styles.titledListIcon} />}
      {type === constants.SECTION_ABILITIES && <GoTools className={styles.titledListIcon} />}
      {type === constants.SECTION_KNOWLEDGE && <FaRegLightbulb className={styles.titledListIcon} />}
      {line}
    </li>
  );
}

TitledListItem.propTypes = {
  type: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired,
};

export default TitledListItem;
