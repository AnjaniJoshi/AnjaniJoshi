import React from 'react'
import Link from 'gatsby-link'
import '../../styles/styles.css'

const socialLinks = [
  { name: 'Medium', src: 'https://medium.com/@anjani.kjoshi' },
  { name: 'Linkdin', src: 'https://www.linkedin.com/in/anjani-kumar-joshi-4648a290/' },
  { name: 'Github', src: 'https://github.com/AnjaniJoshi' },
]

class Footer extends React.Component {
    render () {
      return (
        <footer id="find-me">
          <h5>where to find me ..</h5>
          {socialLinks.map((link, i) => {
            return (
                <a key={i} className="shakebottom" href={link.src} target="_blank"> {link.name} </a>
            )
          })}
        </footer>
      );
    }
}

export default Footer
