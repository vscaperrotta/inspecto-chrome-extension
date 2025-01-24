import PropTypes from "prop-types";
import { nullSafe } from '@utils/globalMethods';

function Border({ elementRect = {} }) {

  return (
    <div
      className="css-border__container"
      style={{
        top: nullSafe(() => elementRect.top, 0),
        left: nullSafe(() => elementRect.left, 0),
        width: nullSafe(() => elementRect.width, 0),
        height: nullSafe(() => elementRect.height, 0),
      }}
    />
  );
}

Border.propTypes = {
  elementRect: PropTypes.object,
};

export default Border;