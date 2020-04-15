import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import '../styles/list.sass'
import Layout from '../components/layout'

const Index = (props) => (
  <Layout>
    <Head>
      <title>Petz - Adote um pet</title>
    </Head>
    <ol className="list">
      {props.post.map(card => (
        <li key={card.id}>
          <Link href="/detail/[id]" as={`/detail/${card.id}`}>
            <a>
              <img src={card.image} />
              <h1>{card.title}</h1>
              <p>{card.body}</p>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  </Layout>
)

Index.defaultProps = { post: [] }

Index.getInitialProps = async function() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const post = await posts.json()

  post.map((a,i) => a.image = 'http://placeimg.com/150/150/animals?i='+i)

  return { post }
}

export default Index