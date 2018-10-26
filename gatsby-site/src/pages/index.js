import React from 'react'
import { Link } from 'gatsby'

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
  </Layout>
)

export default IndexPage
