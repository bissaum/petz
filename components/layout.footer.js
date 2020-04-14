import React from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Footer = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Index</a>
    </Link>
    <Link href="/detail">
      <a style={linkStyle}>Detail</a>
    </Link>
  </div>
)

export default Footer