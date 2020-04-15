import '../styles/layout.sass'

import React from 'react'
import Header from './layout.header'

const Layout = props => (
  <div className="layout">
    <Header />
    {props.children}
  </div>
)

export default Layout