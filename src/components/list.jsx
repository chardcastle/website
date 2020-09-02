import PropTypes from 'prop-types';
import cx from 'classnames';
import globalStyles from './global.module.css';

function List(props) {
  const { listContent } = props;

  return ( // TODO <Col>?
    <div className={cx('col-sm-5', globalStyles.noStyle)}>
      <ul>
        {listContent}
      </ul>
    </div>
  );
}

List.propTypes = {
  listContent: PropTypes.string.isRequired,
};

export default List;
