import { nullSafe } from 'Utils/globalMethods';

function Properties({ properties }) {

  return (
    <div className="css-properties__container">
      {nullSafe(() => properties, []).map((property) => (
        <p key={property.label} className='css-property__value'>
          <span className='css-property__key'>
            {property.label}
          </span>
          <span className='css-property__value'>
            {property.value}
          </span>
        </p>
      ))}
    </div>
  );
}

export default Properties;