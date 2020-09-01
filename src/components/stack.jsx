import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Divider from './divider';
import globalStyles from './global.module.css';
import styles from './stack.module.css';
import IllustratedList from "./illustratedList";

function Stack(props) {
  const { primary, secondary } = props;

  const primaryContent = primary.map((line) => (
    <li>
      <span className={styles.bolt} />
      {line}
    </li>
  ));

  const secondaryContent = secondary.map((line) => (
    <li>
      <span className={styles.bolt} />
      {line}
    </li>
  ));

  return (
    <section className={globalStyles.altAppSection} id="stack">
      <Container>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={globalStyles.title}>Technologies</h2>
            <Divider type="line-default" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1">
            <ul className="no-style">
              <li><img src="/img/php-57.png" alt="PHP version 5 and 7" /></li>
              <li><br /></li>
              <li><img src="/img/mysql.png" alt="MySQL" /></li>
            </ul>
          </div>
          <IllustratedList listContent={primaryContent} />

          <div className="col-sm-1">
            <ul className="no-style">
              <li><img src="/img/sf.png" alt="Symfony" /></li>
              <li><br /></li>
              <li><img src="/img/zf.png" alt="ZF" /></li>
            </ul>
          </div>
          <IllustratedList listContent={secondaryContent} />
        </div>
      </Container>
    </section>
  );
}

Stack.propTypes = {
  primary: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondary: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stack;
