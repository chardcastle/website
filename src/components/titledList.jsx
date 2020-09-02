import PropTypes from 'prop-types';
import cx from 'classnames';
import crypto from 'crypto';
import globalStyles from './global.module.css';
import styles from './titledList.module.css';

function TitledList(props) {
  const { listItems, title } = props;

  const listContent = listItems.map((line) => (
    <li key={crypto.randomBytes(16).toString('hex')}>
      <span className={styles.bolt} />
      {line}
    </li>
  ));

  return (
    <div className={cx('col-sm-4', styles.titledList, globalStyles.noStyle)}>
      <h3 className={cx(styles.title, globalStyles.styledFont)}>
        {title}
      </h3>
      <ul>
        {listContent}
      </ul>
    </div>
  );
}

TitledList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default TitledList;
