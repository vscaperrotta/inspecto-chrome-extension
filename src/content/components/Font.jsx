import PropTypes from "prop-types";

function Font({ fontFamily = '' }) {

  return (
    <div className="css-font__container">
      <p className="css-font__text">
        <span className='font-family-key'>
          {'Aa'}
        </span>
        <span className='font-family-value'>
          {fontFamily}
        </span>
      </p>
    </div>
  );
}

Font.propTypes = {
  fontFamily: PropTypes.string
};

export default Font;