import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/layout'

const DetailLink = props => (
  <Link href="/detail/[id]" as={`/detail/${props.id}`}>
    <a>{props.id}</a>
  </Link>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Showssssss</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index