// import PropTypes from 'prop-types';

function Toggle() {

  return (
    <label className="toggle__container">
      <input type="checkbox" />
      <span className="toggle__slider"></span>
    </label>
  )
}

Toggle.propTypes = {
  // Add here some propTypes
};

export default Toggle;