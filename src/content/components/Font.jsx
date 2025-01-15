import { nullSafe } from 'Utils/globalMethods';

function Font({ fontFamily }) {

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

export default Font;