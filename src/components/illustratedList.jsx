import PropTypes from 'prop-types';

function IllustratedList(props) {
  const { listContent } = props;
  return (
    <div className="col-sm-5">
      <ul>
        {listContent}
      </ul>
    </div>
  );
}

IllustratedList.propTypes = {
  listContent: PropTypes.string.isRequired,
};

export default IllustratedList;
