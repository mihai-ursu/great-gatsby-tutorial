import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            author
            slug
            publishedDate(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `)

  const items = data.allContentfulBlogPost.edges

  const posts = items.map(item => (
    <div className="blog-item">
      <h2>{item.node.title}</h2>
      <div className="blog-details">
        <p>{item.node.author}</p>
        <p>{item.node.publishedDate}</p>
      </div>
      <Link to={`/blog/${item.node.slug}`}>Reat More</Link>
    </div>
  ))

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      {posts}
    </Layout>
  )
}

export default BlogPage
