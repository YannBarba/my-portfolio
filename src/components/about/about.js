import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">I am co-founder of Growth Factor, <br/>A company that helps organizations to improve their H.R. departments, and more importantly, their people!
            I am a passionate and dedicated professional in the field of Information Technology with a Master's degree in I.T. Security</p>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Here's a brief on me.</h3>
            <p>I began my career in International Commerce in 2013, managing sensitive financial and product-related information.<br/>
              Through handling these documents, I developed a passion for information security.<br/>
              Driven by this interest, I started teaching myself everything I could about cybersecurity and software development, a pursuit I continue to this day.</p>
            <p>In 2018, I had the opportunity to apply my newly acquired skills in Gonubie, South Africa.<br/>
              Upon returning to my beloved Mexico City, I worked with small companies in various roles, including IT security analyst, business continuity planner, SOC implementor and operator, and software developer and
              in 2022, I founded my own company, Growthfactor, which is dedicated to maximizing business performance and productivity through the development and optimization of their employees. 
              Our mission is to help organizations achieve their maximum potential by implementing strategies and programs that foster workforce growth and development. </p>
            
            <p>You'll find out that I'm a very curious, yet very analytical and problem solving driven person. I love learning about different subjects, but mostly<br/>
            try o keep my knowledge up to date on new technologies and trends. Therefore, I always give my all to bring my customers top value for their trust<br/>
            To build my business I had to use technologies like React for front-end ,and a back-end based on NodeJS,  MongoDB to manage databases and, Docker for continuous integrating.
            </p>
            
          </div>
          <div className="col-six tab-full right">
            <h3>My skills.</h3>
            <ul className="skill-bars">
              <li>
                <div className="progress percent80">{/* <span>30%</span> */}</div>
                <strong>HTML5 ~ CSS3 ~ Responsive</strong>
              </li>
              <li>
                <div className="progress percent55">{/*<span>40%</span>*/}</div>
                <strong>CS6 Collection</strong>
              </li>
              <li>
                <div className="progress percent90">{/*<span>90%</span>*/}</div>
                <strong>React JS</strong>
              </li>
              <li>
                <div className="progress percent55">{/*<span>50%</span>*/}</div>
                <strong>NestJS</strong>
              </li>
              <li>
                <div className="progress percent80">{/*<span>80%</span>*/}</div>
                <strong>Linux Kali/Parrot</strong>
              </li>
              <li>
                <div className="progress percent90">{/*<span>90%</span>*/}</div>
                <strong>Django/ Python</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="row about-content about-content--buttons">
          <div className="col-six tab-full left">
            <a target="_blank" href="../../assets/pdf/cv_en.pdf" className="btn btn--primary full-width">Download My CV</a>
          </div>
          <div className="col-six tab-full right">
            <a href="mailto:yannick.garcia.barba@gmail.com" className="btn full-width">Hire Me Now</a>
          </div>
        </div>
        <div className="row about-content about-content--timeline">
          <div className="col-full text-center">
            <h3>My Work Experience.</h3>
          </div>
          <div className="col-six tab-full left">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Oct 23 - Present</p>
                  <h3>AMIAC (Mexican Academy of Informatics) </h3>
                  <h5>Associate Member, Researcher</h5>
                </div>
                <div className="timeline__desc">
                  <p>I engage in conversations and debates with the most qualified I.T. profesionals in Mexico, sporadically I research on I.T. trends and threats </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Dec 22 - Present</p>
                  <h3>Growthfactor</h3>
                  <h5>Co-founder, Full-stack developer and commercial strategist</h5>
                </div>
                <div className="timeline__desc">
                  <p>Growthfactor is a platform, design to evaluate personnel performance, reward efforts and strengthen the crew's skills.</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Sept 2013 - April 2014</p>
                  <h3>Mattica</h3>
                  <h5>Intern</h5>
                </div>
                <div className="timeline__desc">
                  <p>Mattica is a cybersecurity consulting company, which provides all sorts of security related-services like I.T. forensics, malware analysis, reverse engineering and more.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Mar 2019 - August 2022</p>
                  <h3>B4W Mexico</h3>
                  <h5>Cybersecurity Analyst</h5>
                </div>
                <div className="timeline__desc">
                  <p>B4W is a business consulting company based in Mexico. My job was to help clients develop BCP's, prepare for ISO 27001 certifications, using franworks like MITRE & OWASP, I developed a system to evaluate working conditions according to NOM 035
                      (applicable only in Mexico) and designed the web app for NeuroAp
                       which helps companies fulfill the requirements for NOM 036
                      (exclusively in Mexico) to maintain a healthier work environment.</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Feb 2018 - Dec 2018</p>
                  <h3>B4W South Africa / Inclusive Growth Project</h3> 
                  <h5>Front-end Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Development of corporate websites, newsletters, landings, pure HTML layout, CSS + Javascript</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">Sep 2013 - Feb 2018</p>
                  <h3>Specialpy Chemicals</h3>
                  <h5>Intern from May 2012- Sep 2013// Imports & customs operations for chemical products</h5>
                </div>
                <div className="timeline__desc">
                  <p>Specialpy Chemicals is a mexican national leading provider of high-quality chemical products, specializing in the importation and distribution of a diverse range of chemicals to various industries. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}