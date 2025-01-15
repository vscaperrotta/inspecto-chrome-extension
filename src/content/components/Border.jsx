import { nullSafe } from 'Utils/globalMethods';

function Border({ elementRect }) {

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

export default Border;