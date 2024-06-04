import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
            </div>
            <ul className="footer-social">
              <li><a href="https://www.linkedin.com/in/yann-barba/" target="_blank">
                  <i aria-hidden="true" />
                  <span>LinkedIn</span>
                </a></li>
              <li><a href="https://github.com/lhommequirit/" target="_blank">
                  <i aria-hidden="true" />
                  <span>Github</span>
                </a></li>
              {/*<li><a href="" target="_blank">
                  <i aria-hidden="true" />
                  <span>Blog</span>
                </a></li>*/}
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright 2024</span>
              <span>Created by <a href="https://github.com/lhommequirit/">Yann Barba</a></span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}