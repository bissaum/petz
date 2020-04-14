import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div>
    <img src="" alt="Petz" />
    <Link href="/">
      <a>Index</a>
    </Link>
    <Link href="/detail">
      <a>Detail</a>
    </Link>
  </div>
)

export default Header