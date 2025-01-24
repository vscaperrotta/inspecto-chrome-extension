import PropTypes from "prop-types";
import { nullSafe } from '@utils/globalMethods';

function Tooltip({ mousePos, children }) {

  return (
    <div
      className="css-tooltip__container"
      style={{
        top: nullSafe(() => mousePos.top, 0),
        left: nullSafe(() => mousePos.left, 0),
      }}
    >
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  mousePos: PropTypes.object,
  children: PropTypes.node,
};

export default Tooltip;