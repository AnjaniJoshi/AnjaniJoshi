import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer/footer'
import '../styles/styles.css'

//     #e54
const headingStyle = {
  textTransform: 'uppercase',
  fontFamily: 'consolas, monospace',
  color: '#e54',
  letterSpacing: '2px',
}

const linkStyle = {
  color: '#e54',
  textDecoration: 'none',
}
const ProjectPage = () => (
  <div className="pageStyle">
    <h1>PROJECTS</h1>
    <br />
    <h3>
      <p>
        I've worked on many types of projects as Personal and side projects.
        Here are some projects I've developed/created.
      </p>
      <br />
      {/****** Projet 1 ******/}
      <a
        href="https://play.google.com/store/apps/details?id=in.sqrrl.app.sqrrlapi"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>SQRRL</h1>
      </a>
      Sqrrl is an investment and wealth management platform aimed at helping young indians build the habit of savings and investments.

      <p>Built With: Android,Java(1.8),Kotlin</p>
      <br />
   {/****** Projet 2 ******/}
      <a
        href="https://play.google.com/store/apps/details?id=com.teemwurk"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>TeemWurk</h1>
      </a>
      TeemWurk provides a SaaS-based integrated human capital management platform.
      A Product which offers employees instant and easy access to all their Benefits, Payroll and HR Information System.
    
      <p>Built With: Android,Java(1.8),Kotlin</p>
      <br />

        {/****** Projet 2 ******/}
        <a
        href="https://play.google.com/store/apps/details?id=com.onCore"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>OnCore HCM</h1>
      </a>
      OnCore provides a SaaS-based integrated human capital management platform.
      A Product which offers employees instant and easy access to all their Benefits, Payroll and HR Information System.
    
      <p>Built With: Android,Java(1.8),Kotlin</p>
      <br />

       {/****** Projet 2 ******/}
       <a
        href="https://play.google.com/store/apps/details?id=sg.whyq.user"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>WhyQ : Hawker delivery</h1>
      </a>
      Singapore based Food Delivery Start-up.Local Food Delivery at low cost.Track ordered food online like swiggy.Rider Application for track packages.
      <p>Built With: Android,Java(1.8),Kotlin</p>
      <br />

        {/****** Projet 2 ******/}
        <a
        href="https://play.google.com/store/apps/details?id=sg.whyq.user"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>ETA</h1>
      </a>
      ETA simply a limousine and bus booking app. User can book both limousine and bus using instant and schedule booking. User track nearby drivers and book their ride. In bus booking user book available seats      <p>Built With: Android,Java(1.8),Kotlin</p>
      <br />


      
         {/****** Projet 2 ******/}
         <a
        href="https://play.google.com/store/apps/details?id=com.courseguru"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>	Course Guru</h1>
      </a>
      CourseGuru is the world's largest Free online courses with free video lectures, tutorials, lessons provider. Courses (video lectures) are provided by top universities like MIT, Stanford, Harvard, Yale, McGill, UC Berkeley, NJIT, UCLA, NPTEL (IISc Bangalore, IIT Bombay, IIT Delhi, IIT Guwahati, IIT Kanpur, IIT Kharagpur, IIT Madras, IIT Roorkee) and Khan academy as well.       <p>Built With: Android,Java(1.8),Kotlin</p>
      <br />


  {/****** Projet 2 ******/}
  <a
        href="https://play.google.com/store/apps/details?id=com.courseguru"
        target="_blank"
        style={linkStyle}
      >
        <h1 style={headingStyle}>Picamoji</h1>
      </a>
      Picamoji is Image and video-editing app. User can edit images. User can add multiple color & different size doodle. User can add text and emojis. Multiple image effect filters provided 
            <p>Built With: Json Android Material Design, Bitmap, Memory management, openGL surface view.
</p>
      <br />





         {/****** Projet 2 ******/}
         <Link to="/" style={linkStyle}>
        {' '}
        <h1 style={headingStyle}>My PortFolio site</h1>
      </Link>
      Developed this Fast Portfolio site. Inspired by{' '}
      <a href="https://twitter.com/stolinski" target="_blank" style={linkStyle}>
        Scott Tolinski
      </a>.
      <p>Built With: React, Gatsby</p>
      <br />



      {/****** Projet 3 ******/}
    
      {/****** Project 4 ******/}
      
  
      {/****** Project 5 ******/}
      
      {/****** Project 7 ******/}
     
      {/* Project 8 */}
      
    </h3>
    <Footer />
  </div>
)

export default ProjectPage
