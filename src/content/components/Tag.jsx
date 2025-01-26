function Tag({
  tag = '',
  classes = ''
}) {
  return (
    <div className="css-tag__container">
      <p className="css-tag__text">
        <span className="css-tag__tag">
          {tag}
        </span>
        <span className="css-tag__classes">
          {classes}
        </span>
      </p>
    </div>
  );
}

export default Tag;