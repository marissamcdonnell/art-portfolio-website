import React from 'react'
import { Link } from 'gatsby'

<<<<<<< HEAD
import Body from '../components/body'

import Layout from '../layout'
// import styles from '../scss/layout/layout.module.scss'

const IndexPage = () => (
  <Layout>
    <div>
      <Body />
      <h1>I think this is the right file?</h1>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
=======
import Layout from '../layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
>>>>>>> parent of 4d1be82... more setup
  </Layout>
)

export default IndexPage
