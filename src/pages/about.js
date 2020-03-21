import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, cum
        asperiores deleniti dolorem ea possimus quia enim ratione blanditiis,
        quod id delectus aspernatur saepe repellendus natus provident debitis
        voluptatum vitae! Delectus qui perspiciatis facere odit tempore, dolor
        porro iste sed quis. Explicabo veniam amet, non nisi et consequuntur
        doloribus consectetur alias vero asperiores adipisci, ullam ducimus,
        magnam odit modi porro? Aperiam fugit temporibus odio tempora saepe,
        blanditiis, culpa asperiores sunt suscipit quibusdam adipisci minus!
        Voluptatum deleniti est voluptatibus dolore numquam quos voluptate alias
        debitis atque nostrum, impedit, assumenda repellendus quasi! Illum minus
        nisi recusandae, nemo distinctio ad, quis totam accusantium temporibus
        a, libero maiores! Animi aut commodi, adipisci dolorem nulla porro
        cumque molestiae quo consequuntur, ratione totam at enim excepturi!
      </p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage
