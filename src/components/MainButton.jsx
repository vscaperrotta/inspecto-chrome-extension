import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

function MainButton({ isOn, onClick }) {
  return (
    <button
      className={`main-button ${isOn ? "main-button--off" : "main-button--on"}`}
      onClick={onClick}
    >
      {isOn ? 'Pause' : 'Play'}
      {isOn ? <Icon.Pause size={20} /> : <Icon.Play size={20} />}
    </button>
  )
}

MainButton.propTypes = {
  // Add here some propTypes
  isOn: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MainButton;