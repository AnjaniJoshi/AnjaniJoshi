import React from 'react'
import Footer from '../components/Footer/footer'
import '../styles/styles.css'
import Link from 'gatsby-link'

//      #1a8
const linkStyle = {
  color: '#1a8',
  textDecoration: 'none',
}

const AboutPage = () => (
  <div className="pageStyle">
    <h1>ABOUT</h1>
    <br />
    <h3>
      Hi, I'm Anjani kumar joshi.<br />
      <br />
      <p>
        I'm an enthusiastic self taught Android Enginner. I love creating beautiful
        Android Applications. Comfortable in developing Android apps with Kotlin/java.
         I started Android development in 2015 and since then I've been developing major projects
        where I Implement almost everything whatever I learned. And yes I know
        how to teach myself stuff. I also do web design and development for
        projects that I find interesting, challenging or exciting.
      </p>
      <p>
        I love Adventure, specially trekking and exploring various places. Big
        fan of Fifa and Call of Duty. I'm inspired by a hot cup of Coffee,
        excellent EDM, TV seasons and{' '}
        <a
          href="https://twitter.com/stolinski"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          Scott Tolinski
        </a>.
      </p>
      Please
      <Link to="/contact/" style={linkStyle}>
        {' '}
        contact me{' '}
      </Link>
      if you would like to work on a project together, or just want to chat.
    </h3>

    <div className="resume-outside">
      <div className="resume-inside">
        <p id="small-heading">/* --Resume-- */</p>
        <br />
        <p className="comment-head">/* SUMMARY OF QUALIFICATIONS */ </p>
        <p>
          Received a Bachelors degree in the ECE at
          Marudhar Engineering College, Bikaner, Rajasthan.
        </p>
        <p>
          Excellent organization, self-motivation, and problem-solving skills.
        </p>
        <p>
          Creative, strong communication skills and consistently meets
          deadlines.
        </p>
        <p>Passionate about Android development and new technologies.</p>

        {/*****Section Technical Skills*****/}
        <p className="comment-head">/* TECHNICAL SKILLS */</p>
        <p>
          <p className="min-heads"> Programming Languages: </p>CoreJava,
           Kotlin, HTML/CSS,  C and Java
        </p>
        <p>
          <p className="min-heads">Tools: </p>SVN, GIT, JIRA, bitbucket
        </p>

        <p>
          <p className="min-heads">Plateforms: </p>Linux, Windows, Mac
        </p>
        
        <p>
          <p className="min-heads">Database:</p> MongoDB, Relam, SQLite, MySQL
        </p>
        <p>
          <p className="min-heads">Version Control: </p> Git
        </p>
        <p>
          <p className="min-heads"> IDE & Photo Editing Tools: </p> Android Studio,
          VS Code, Atom, Photoshop
        </p>
        {/***** Section Ends *****/}

        <p className="comment-head">/* EXPERIENCE */</p>
        <p className="comment-head">

        <p className="comment-head">
          //Current Work details{' '}
          
        </p>
    
          <p style={{ fontSize: '0.7rem' }}>//DEC 2018 - PRESENT</p>{' '}
        </p>
        <p>
          <p className="min-heads">  Company Name: </p> Sqrrl Fintech
        </p>
        <p>
          <p className="min-heads">  Responsibilities: </p> 
        </p>
        <p>Understanding the requirements and design.</p>
        <p>Creational (Singleton), Factory Design patterns used.</p>
        <p>Development activities in Android, core Java using different MVVM.</p>

        <p>
        Ensuring adherence to the coding standards (Findbug and versioning management).
        </p>
        <p>
        Testing and production support of the application
        </p>
        <p>
        Converting old code into new architecture components (JetPack )
        </p>

        
        <p>
          <p className="min-heads">  PlayStore: </p> {' '}
          <a
          href="https://play.google.com/store/apps/details?id=in.sqrrl.app.sqrrlapi"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          Sqrrl
        </a>.
        </p>

        <p className="comment-head">
          //Past Work details{' '}
          
          <p style={{ fontSize: '0.7rem' }}>// March 2018 - December </p>{' '}
        </p>
        <p>
          <p className="min-heads">  Company Name: </p> A3Logics India Pvt. Ltd.
        </p>

        <p>
          <p className="min-heads">  PlayStore: </p> {' '}
          <a
          href="https://play.google.com/store/apps/details?id=com.teemwurk"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          OnCore HCM
        </a>.
        </p>

        <p>
          <p className="min-heads">  PlayStore: </p> {' '}
          <a
          href="https://play.google.com/store/apps/details?id=com.onCore"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          TeemWurk
        </a>.
        </p>
        
        <p className="comment-head">
          // January, 2017 - March 2018 {' '}
       </p>

        <p>
          <p className="min-heads">  Company Name: </p>  Syon InfoMedia Pvt Ltd
        </p>

        <p>
          <p className="min-heads">  PlayStore: </p> {' '}
          <a
          href="https://play.google.com/store/apps/details?id=sg.whyq.users"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          WhyQ : Hawker delivery
        </a>.
        </p>

        <p>
          <p className="min-heads">  PlayStore: </p> {' '}
          <a
          href=" https://play.google.com/store/apps/details?id=com.eta.drivers          "
          target="_blank"
          style={linkStyle}
        >
          {' '}
          ETA
        </a>.
        </p>

        <p className="comment-head">
          // March, 2015- January 2017 {' '}
       </p>

       <p>
          <p className="min-heads">  Company Name: </p> JasApp TechServ Pvt Ltd.
        </p>
     
        <p>
          <p className="min-heads">  PlayStore: </p> {' '}
          <a
          href="https://play.google.com/store/apps/details?id=com.courseguru"
          target="_blank"
          style={linkStyle}
        >
          {' '}
          CourseGuru Free Online Courses
        </a>.
        </p>

        

        {/***** Section Ends *****/}
        <p className="comment-head">/* EDUCATION */ </p>
        <p>
          <p className="min-heads">MEC Bikaner, Rajasthan - </p>
          B.Tech. Electronics and Communication Engineering 2014
        </p>

        {/* Inside Resume Ends*/}
      </div>
    </div>

    <Footer />
  </div>
)

export default AboutPage
