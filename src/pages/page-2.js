import React from 'react'
import Link from 'gatsby-link'

export const frontmatter = {
  title: "Choropleth on d3v4",
  company: 'Shopify'
}

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
