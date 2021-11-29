/* Vendor imports */
import React from 'react'
/* App imports */
import style from './footer.module.less'

const Footer = () => (
  <div className={style.container}>
    <p style={{ textAlign: 'center' }}>
      Thank you for viewing my portfolio. If you have any questions please feel
      free to contact me at anytime at
      <b style={{ textDecoration: 'underline' }}>
        {' '}
        <a
          href="https://calendly.com/victorasauceda/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: '1rem' }}
        >
          victorasauceda@gmail.com
        </a>
      </b>{' '}
      at any time or schedule an appointment on my{' '}
      <b style={{ textDecoration: 'underline' }}>
        {' '}
        <a
          href="https://calendly.com/victorasauceda/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: '1rem' }}
        >
          calendar
        </a>
      </b>
    </p>
  </div>
)

export default Footer
