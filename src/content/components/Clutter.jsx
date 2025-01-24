import PropTypes from "prop-types";

function Clutter({
  height = '',
  width = '',
  margin = {},
  padding = {}
}) {
  return (
    <div className="css-clutter__container">
      <div className="css-clutter__margin">
        <label className="css-clutter__label">
          margin
        </label>
        <p className={`css-clutter__margin-value css-clutter__margin-value--top ${margin.top === '0' ? 'disabled' : ''}`}>
          {margin.top}
        </p>
        <p className={`css-clutter__margin-value css-clutter__margin-value--left ${margin.left === '0' ? 'disabled' : ''}`}>
          {margin.left}
        </p>
        <p className={`css-clutter__margin-value css-clutter__margin-value--right ${margin.right === '0' ? 'disabled' : ''}`}>
          {margin.right}
        </p>
        <p className={`css-clutter__margin-value css-clutter__margin-value--bottom ${margin.bottom === '0' ? 'disabled' : ''}`}>
          {margin.bottom}
        </p>
        <div className="css-clutter__padding">
          <label className="css-clutter__label">
            padding
          </label>
          <p className={`css-clutter__padding-value css-clutter__padding-value--top ${padding.top === '0' ? 'disabled' : ''}`}>
            {padding.top}
          </p>
          <p className={`css-clutter__padding-value css-clutter__padding-value--left ${padding.left === '0' ? 'disabled' : ''}`}>
            {padding.left}
          </p>
          <p className={`css-clutter__padding-value css-clutter__padding-value--right ${padding.right === '0' ? 'disabled' : ''}`}>
            {padding.right}
          </p>
          <p className={`css-clutter__padding-value css-clutter__padding-value--bottom ${padding.bottom === '0' ? 'disabled' : ''}`}>
            {padding.bottom}
          </p>
          <div className="css-clutter__size">
            <p className="css-clutter__size-value">
              <span className='value'>{height}</span>
              <span className='cross'>{'x'}</span>
              <span className='value'>{width}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Clutter.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.object,
  padding: PropTypes.object
};

export default Clutter;