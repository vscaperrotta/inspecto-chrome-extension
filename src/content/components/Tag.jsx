import PropTypes from "prop-types";

function Tag({
  tag = '',
  classes = ''
}) {
  return (
    <div className="css-tag__container">
      <p className="css-tag__text">
        <span className="css-tag__tag">
          {tag}
        </span>
        <span className="css-tag__classes">
          {classes}
        </span>
      </p>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
  classes: PropTypes.string
};

export default Tag;