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


export default Tooltip;