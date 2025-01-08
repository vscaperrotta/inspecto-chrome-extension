// import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import Pkg from '../../package.json';

function Footer() {
  const now = new Date().getFullYear();

  return (
    <div className="footer__container">
      <p className="footer__message">
        {`© ${now} ${Pkg.displayName || ''}`}
      </p>
      <div className="footer_links">
        <a
          className='external__link'
          href='https://github.com/vscaperrotta/css-scanner-chrome-extension'
          target='_blank'
          title='github repository'
        >
          <Icon.GitHub size={20} />
        </a>
      </div>
    </div>
  )
}

Footer.propTypes = {
  // Add here some propTypes
};

export default Footer;