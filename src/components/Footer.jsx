
import * as Icon from 'react-feather';

function Footer({ }) {
  const now = new Date().getFullYear();

  return (
    <div className="footer__container">
      <p className="footer__message">
        {`© ${now} CSS Scanner`}
      </p>

      <div className="footer_links">
        <a className='external__link' target='_blank' title='github repository'>
          <Icon.GitHub size={20} />
        </a>
      </div>
    </div>
  )
}

export default Footer;