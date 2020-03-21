import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I am a front end dev from Romania</h2>
      <p>Need a developer?</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default IndexPage
