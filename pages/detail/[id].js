import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import '../../styles/detail.sass'
import Layout from '../../components/layout'

const Detail = (props) => {
  return (
    <Layout>
      <Head>
        <title>Petz - Adote este pet</title>
      </Head>
      <div className="detail">
        <section>
          <img src={props.post.image} />
          <h1>{props.post.title}</h1>
          <p>{props.post.body}</p>
          <dl>
            <dt>
              <img src={props.user.image} />
            </dt>
            <dd>
              <small>{props.user.gender=='male'?'Doador':'Doadora'}</small>
              <b>{props.user.name}</b>
              <address>
                {props.user.email}<br />
                {props.user.phone}
              </address>
            </dd>
          </dl>
          <iframe src={`https://maps.google.com/maps?q=${props.user.address.geo.lat},${props.user.address.geo.lng}&hl=pt-BR;z=14&output=embed`} width="100%" height="400px" frameBorder="0"></iframe>
        </section>
      </div>
    </Layout>
  );
}

Detail.getInitialProps = async function(context) {
  let { id } = context.query
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
  const post = await posts.json()

  post.image = 'http://placeimg.com/150/150/animals'

  const users = await fetch('https://jsonplaceholder.typicode.com/users/'+post.userId)
  const user = await users.json()

  user.image = 'http://placeimg.com/150/150/people'
  user.gender = Math.round(Math.random()) ? 'male' : 'female'

  console.log(user)

  return { post, user }
}

export default Detail