import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import "../styles/index.sass"

import ConsoleBlocker from '../utils/console'

let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
if ( activeEnv !== 'development' ) {
  ConsoleBlocker.run()
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
