import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <div>
        <Link className={headerStyles.logo} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </div>
      <nav>
        <Link activeClassName={headerStyles.activeNav} to="/">
          Home
        </Link>
        <Link activeClassName={headerStyles.activeNav} to="/about">
          About
        </Link>
        <Link activeClassName={headerStyles.activeNav} to="/blog">
          Blog
        </Link>
        <Link activeClassName={headerStyles.activeNav} to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
