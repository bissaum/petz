import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import '../styles/list.sass'
import Layout from '../components/layout'

const Index = (props) => {
  const [ searchTerm, setSearchTerm ] = React.useState('')

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  let showSearch = React.useState('')

  const toggleSearch = () => {
    showSearch = showSearch ? false : true
  }

  const results = !searchTerm ? props.post : props.post.filter(
    pet => pet.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <Layout>
      <Head>
        <title>Petz - Adote um pet</title>
      </Head>
      <a className="icon-right" onClick={toggleSearch}>
        <i className="gg-search"></i>
      </a>
      <ol className="list">
        <li className={showSearch?'show':'hide'}>
          <input type="search" placeholder="Buscar" value={searchTerm} onChange={handleChange} />
          <h2>{results.length} pets listados para adoção</h2>
        </li>
        {results.map(card => (
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
}

Index.defaultProps = { post: [] }

Index.getInitialProps = async function() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const post = await posts.json()

  post.map((a,i) => a.image = 'http://placeimg.com/150/150/animals?i='+i)

  return { post }
}

export default Index