import crypto from 'crypto';
import PropTypes from 'prop-types';
import { GoPerson, GoTools } from 'react-icons/go';
import { FaRegLightbulb } from 'react-icons/fa';
import constants from '../constants';

function TitledListItem(props) {
  const { type, line } = props;

  return (
    <li key={crypto.randomBytes(16).toString('hex')}>
      {type === constants.SECTION_AFFIRMATIONS && <GoPerson />}
      {type === constants.SECTION_ABILITIES && <GoTools />}
      {type === constants.SECTION_KNOWLEDGE && <FaRegLightbulb />}
      &nbsp;
      {line}
    </li>
  );
}

TitledListItem.propTypes = {
  type: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired,
};

export default TitledListItem;
