import PropTypes from 'prop-types';

function MainButton({ isOn, onClick }) {
  return (
    <button
      className={`main-button ${isOn ? "main-button--on" : "main-button--off"}`}
      onClick={onClick}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

MainButton.propTypes = {
  // Add here some propTypes
  isOn: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MainButton;