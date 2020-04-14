import '../styles/layout.sass'

import React from 'react'
import Header from './layout.header'
import Footer from './layout.footer'

const Layout = props => (
  <div className="layout">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout