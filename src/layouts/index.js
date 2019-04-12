import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Anjani Kumar joshi" meta={[ { name: 'anjani kumar joshi', content: 'Android Enginner' }, { name: 'keywords', content: 'Programming, India' }]}>
      <meta charSet="utf-8" />
      <title>Anjani Kumar joshi</title>
    </Helmet>
    <Header />
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
