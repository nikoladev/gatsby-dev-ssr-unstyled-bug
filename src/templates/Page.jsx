import React from 'react'
import classNames from 'classnames'
import css from './Page.module.scss'

function Template ({ children }) {
  return (
    <article
      className={classNames([
        css.wrapper,
      ])}
    >
      <section
        className={classNames([
          css.section,
        ])}
      >
        {children}
      </section>
    </article>
  )
}

export default Template
