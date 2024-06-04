import React, { Component } from 'react';

export default class header extends Component {
  render() {
    return (
      <section id="works" className="s-works target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Portfolio</h3>
            <h1>Check out some of my Projects.</h1>
            <p className="lead">These are some of the projects I've worked</p>
          </div>
        </div>
        <div className="row masonry-wrap">
          <div className="masonry">
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a href="images/portfolio/gallery/SPC.png" className="thumb-link" title="SPC!" data-size="1050x700">
                    <img src="images/portfolio/SPC.png" srcSet="images/portfolio/SPC.png 1x, images/portfolio/SPC.png 2x" alt="SPC!"/>
                    <span className="shadow-overlay" />
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">
                  Specialpy Chemicals
                  </h3>
                  <p className="item-folio__cat">
                    REACT + NestJS
                  </p>
                </div>
                <a href="http://specialpy-chemicals.com.mx" className="item-folio__project-link" title="Project link">
                  <i className="im im-link" />
                </a>
                <div className="item-folio__caption">
                  <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </div>
              </div> {/* end item-folio */}
            </div> {/* end masonry__brick */}

            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a href="images/portfolio/gallery/growthfactor.png" className="thumb-link" title="Growthfactor" data-size="1050x700">
                    <img src="images/portfolio/growthfactor.png" srcSet="images/portfolio/growthfactor.png 1x, images/portfolio/growthfactor.png 2x" />
                    <span className="shadow-overlay" />
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">
                    Growthfactor!
                  </h3>
                  <p className="item-folio__cat">
                    React + NestJS + 
                  </p>
                </div>
                <a href="https://growthfactor.mx/" className="item-folio__project-link" title="Project link">
                  <i className="im im-link" />
                </a>
                <div className="item-folio__caption">
                  <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </div>
              </div> {/* end item-folio */}
            </div> {/* end masonry__brick */}            
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a href="images/portfolio/gallery/blog.png" className="thumb-link" data-size="1050x700">
                    <img src="images/portfolio/altafulla.png" srcSet="images/portfolio/blog.png 1x, images/portfolio/blog.png 2x"  />
                    <span className="shadow-overlay" />
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">
                    Blog
                  </h3>
                  <p className="item-folio__cat">
                    MongoDB+Express+React+Node, Not finished
                  </p>
                </div>
                <a href="https://github.com/" className="item-folio__project-link" title="Project link">
                  <i className="im im-link" />
                </a>
                <span className="item-folio__caption">
                  <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </span>
              </div> {/* end item-folio */}
            </div> {/* end masonry__brick */}
            <div className="masonry__brick">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a href="images/portfolio/gallery/neuromanagement.png" className="thumb-link" data-size="1050x700">
                    <img src="images/neuromanagement.png" srcSet="images/portfolio/neuromanagement.png 1x, images/portfolio/neuromanagement.png 2x"  />
                    <span className="shadow-overlay" />
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">
                    Neuromanagement
                  </h3>
                  <p className="item-folio__cat">
                    HTML5, CSS3, Javascript, FireBase
                  </p>
                </div>
                <a href="https://www.neuromanagement.mx/" className="item-folio__project-link" title="Project link">
                  <i className="im im-link" />
                </a>
                <span className="item-folio__caption">
                  <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </span>
              </div> {/* end item-folio */}
            </div> {/* end masonry__brick */}
          </div>
        </div> {/* end masonry */}
      </section>
    )
  }
}