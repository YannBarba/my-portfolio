import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Hola!</h3>
            <h1>
              I'm Yann! <br />
              <br/>I'm a Full-stack <br />
              Developer,  &amp; Ethical Hacker <br /> based in Mexico City.
            </h1>
            <div className="home-content__buttons">
              <a href="#works" className="smoothscroll btn btn--stroke">
                Latest Projects
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                About Me
              </a>
            </div>
            <div className="home-content__scroll">
              <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
        </div>
        <ul className="home-social">
          <li>
            <a href="https://www.linkedin.com/in/yann-barba/"><i className="im im-linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
          </li>
          {/*<li>
            <a href="https://github.com/lhommequirit"><i className="im im-github" aria-hidden="true" /><span>Github</span></a>
          </li>
          <li>
            <a href="https://www.behance.net/vmoreno"><i className="im im-behance" aria-hidden="true" /><span>Behance</span></a>
          </li>*/}
        </ul>
      </section>
    )
  }
}