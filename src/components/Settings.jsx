// import PropTypes from 'prop-types';

import Toggle from 'Components/Toggle';

function Settings() {

  const settings = [{
    label: 'Option 1',
  }]

  return (
    <div className="settings__container">
      Settings here...
      <div className="settings__list">
        {settings.map((element, index) => (
          <div key={index} className="settings__item">
            <span>{element.label}</span>
            <Toggle />
          </div>
        ))}
      </div>
    </div>
  )
}

Settings.propTypes = {
  // Add here some propTypes
};

export default Settings;