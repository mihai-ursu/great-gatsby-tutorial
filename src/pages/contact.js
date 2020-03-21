import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <ul>
        <li>Email: blah@blah.com</li>
        <li>Address: Blah Street</li>
        <li>Phone: 555-5555 555</li>
        <li>
          <a href="https://twitter.com/_UMihai">My Twitter</a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
