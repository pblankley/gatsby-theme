/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../scss/style.scss"

import cruipLogo from "../images/logo.svg"
import cruipLogoFacebook from "../images/facebook-logo.svg"
import cruipLogoTinder from "../images/tinder-logo.svg"
import cruipLogoAirbnb from "../images/airbnb-logo.svg"
import cruipLogoMicrosoft from "../images/microsoft-logo.svg"
import cruipLogoHubspot from "../images/hubspot-logo.svg"

import cruipFeaturesIcon01 from "../images/feature-icon-01.svg"
import cruipFeaturesIcon02 from "../images/feature-icon-02.svg"
import cruipFeaturesIcon03 from "../images/feature-icon-03.svg"
import cruipFeaturesIcon04 from "../images/feature-icon-04.svg"


import cruipTabsIcon01 from "../images/tabs-icon-01.svg"
import cruipTabsIcon02 from "../images/tabs-icon-02.svg"
import cruipTabsIcon03 from "../images/tabs-icon-03.svg"

const themeImages = {
  main: cruipLogo,

  clients: {
    fb: cruipLogoFacebook,
    tinder: cruipLogoTinder,
    airbnb: cruipLogoAirbnb,
    microsoft: cruipLogoMicrosoft,
    hubspot: cruipLogoHubspot,
  },

  features: {
    icon01: cruipFeaturesIcon01,
    icon02: cruipFeaturesIcon02,
    icon03: cruipFeaturesIcon03,
    icon04: cruipFeaturesIcon04,
  },

  tabs: {
    icon01: cruipTabsIcon01,
    icon02: cruipTabsIcon02,
    icon03: cruipTabsIcon03,
  }

}


class Layout extends React.Component {

  componentDidMount() {

    // Accordion component
    const accordionEl = document.getElementsByClassName('accordion-title')

    if (accordionEl.length) {
      for (let i = 0; i < accordionEl.length; i++) {
        accordionEl[i].addEventListener('click', function () {
          this.parentNode.classList.toggle('is-open')
          const panel = this.nextElementSibling
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null
          } else {
            const height = panel.scrollHeight
            panel.style.maxHeight = height + 'px'
          }
        })
      }
    }

    // Tabs component
    const tabLinksAll = document.getElementsByClassName('tab-link')

    if (tabLinksAll.length) {
      for (let i = 0; i < tabLinksAll.length; i++) {
        tabLinksAll[i].addEventListener('click', function (e) {
          e.preventDefault()
          let tabLinksContainer = tabLinksAll[i].parentNode.parentNode
          let tabPanels = tabLinksContainer.nextElementSibling.getElementsByClassName('tab-panel')
          let tabLinks = tabLinksContainer.getElementsByClassName('tab-link')
          // Remove is-active class from all links and panels
          for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove('is-active')
          }
          for (let i = 0; i < tabPanels.length; i++) {
            tabPanels[i].classList.remove('is-active')
          }
          // Get the ID of panel to display
          let tabID = this.getAttribute('href')
          // Add is-active class to matching link and panel
          tabLinksAll[i].classList.add('is-active')
          document.querySelector(tabID).classList.add('is-active')
        })
      }
    }
    
  }

  render() {

    
    return (
      <React.Fragment>
        <div className="body-wrap boxed-container">

          <header className="site-header">
            <div className="container">
              <div className="site-header-inner">
                <div className="brand header-brand">
                  <h1 className="m-0">
                    <a href="/#">
                      <img src={themeImages.main} alt="Blue logo" />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main>
            <section className="hero">
              <div className="hero-left-decoration is-revealing"></div>
              <div className="hero-right-decoration is-revealing"></div>
              <div className="container">
                <div className="hero-inner">
                  <div className="hero-copy">
                    <h1 className="hero-title mt-0 is-revealing">Landing template for startups</h1>
                    <p className="hero-paragraph is-revealing">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                    <p className="hero-cta mb-0 is-revealing">
                      <a className="button button-primary button-shadow" href="/#">Get started free</a>
                    </p>
                  </div>
                  <div className="hero-illustration"></div>
                </div>
              </div>
            </section>

            <section className="clients section">
                  <div className="container">
                      <div className="clients-inner section-inner has-top-divider">
                          <div className="container-sm">
                              <ul className="list-reset mb-0">
                                  <li className="is-revealing">
                                      <img src={themeImages.clients.fb} alt="Facebook logo" />
                                  </li>
                                  <li className="is-revealing">
                                      <img src={themeImages.clients.tinder} alt="Tinder logo" />
                                  </li>
                                  <li className="is-revealing">
                                      <img src={themeImages.clients.airbnb} alt="Airbnb logo" />
                                  </li>
                                  <li className="is-revealing">
                                      <img src={themeImages.clients.microsoft} alt="Microsoft logo" />
                                  </li>
                                  <li className="is-revealing">
                                    <img src={themeImages.clients.hubspot} alt="Hubspot logo" />
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="features section text-center">
                  <div className="container">
                      <div className="features-inner section-inner has-top-divider">
                        
                          <div className="features-header text-center">
                            <div className="container-sm">
                              <h2 className="section-title mt-0">Meet Blue</h2>
                              <p className="section-paragraph mb-0">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                            </div>
                          </div>

                          <div className="features-wrap">
                              <div className="feature is-revealing">
                                  <div className="feature-inner">
                                      <div className="feature-icon">
                                          <img src={themeImages.features.icon01} alt="Feature 01" />
                                      </div>
                                      <h4 className="feature-title">Lorem Ipsum</h4>
                                      <p className="text-sm">often arouses curiosity due to its resemblance to classical latin</p>
                                  </div>
                              </div>
                              <div className="feature is-revealing">
                                  <div className="feature-inner">
                                      <div className="feature-icon">
                                          <img src={themeImages.features.icon02} alt="Feature 02" />
                                      </div>
                                      <h4 className="feature-title">Lorem Ipsum</h4>
                                      <p className="text-sm">often arouses curiosity due to its resemblance to classical latin</p>
                                  </div>
                              </div>
                              <div className="feature is-revealing">
                                  <div className="feature-inner">
                                      <div className="feature-icon">
                                          <img src={themeImages.features.icon03} alt="Feature 03" />
                                      </div>
                                      <h4 className="feature-title">Lorem Ipsum</h4>
                                      <p className="text-sm">often arouses curiosity due to its resemblance to classical latin</p>
                                  </div>
                              </div>
                              <div className="feature is-revealing">
                                  <div className="feature-inner">
                                      <div className="feature-icon">
                                          <img src={themeImages.features.icon04} alt="Feature 04" />
                                      </div>
                                      <h4 className="feature-title">Lorem Ipsum</h4>
                                      <p className="text-sm">often arouses curiosity due to its resemblance to classical latin</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="features-tabs section">
                  <div className="container">
                      <div className="features-tabs-inner section-inner has-top-divider">
                        <div className="tabs-container">
                          <ul className="tabs-links">
                            <li className="is-revealing">
                              <a href="#tab-1" className="tab-link is-active">
                                <img src={themeImages.tabs.icon01} alt="Tabs icon 01" />
                                <span className="h4 m-0">Amazing features</span>
                              </a>
                            </li>
                            <li className="is-revealing">
                              <a href="#tab-2" className="tab-link">
                                <img src={themeImages.tabs.icon02} alt="Tabs icon 02" />
                                <span className="h4 m-0">Endless possibilities</span>
                              </a>
                            </li>
                            <li className="is-revealing">
                              <a href="#tab-3" className="tab-link">
                                <img src={themeImages.tabs.icon03} alt="Tabs icon 03" />
                                <span className="h4 m-0">Ease of use</span>
                              </a>
                            </li>
                          </ul>
                          <div className="tabs-content">
                            <div id="tab-1" className="tab-panel is-active">
                              <h2>Discover</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <p className="mb-0">A arcu cursus vitae congue. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                            </div>
                            <div id="tab-2" className="tab-panel">
                              <h2>Power of customisation</h2>
                              <p>A arcu cursus vitae congue. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue.</p>
                            </div>
                            <div id="tab-3" className="tab-panel">
                              <h2>Keep it simple</h2>
                              <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                              <p className="mb-0">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </section>

              <section className="testimonials section">
                <div className="container">
                  <div className="testimonials-inner section-inner">
                    <div className="testimonials-header text-center text-light">
                      <h2 className="section-title mt-0">Testimonials</h2>
                    </div>
                    <div className="testimonials-wrap">
                      <div className="testimonial text-sm is-revealing">
                        <div className="testimonial-inner">
                          <div className="testimonial-main">
                            <div className="testimonial-body">
                              <p>I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!</p>
                            </div>
                          </div>
                          <div className="testimonial-footer">
                            <div className="testimonial-name"><a href="/#">@mikesmith</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial text-sm is-revealing">
                        <div className="testimonial-inner">
                          <div className="testimonial-main">
                            <div className="testimonial-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien. Quisque egestas diam in arcu cursus euismod quis.</p>
                            </div>
                          </div>
                          <div className="testimonial-footer">
                            <div className="testimonial-name"><a href="/#">@mikesmith</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial text-sm is-revealing">
                        <div className="testimonial-inner">
                          <div className="testimonial-main">
                            <div className="testimonial-body">
                              <p>I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!</p>
                            </div>
                          </div>
                          <div className="testimonial-footer">
                            <div className="testimonial-name"><a href="/#">@mikesmith</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial text-sm is-revealing">
                        <div className="testimonial-inner">
                          <div className="testimonial-main">
                            <div className="testimonial-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien. Quisque egestas diam in arcu cursus euismod quis.</p>
                            </div>
                          </div>
                          <div className="testimonial-footer">
                            <div className="testimonial-name"><a href="/#">@mikesmith</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial text-sm is-revealing">
                        <div className="testimonial-inner">
                          <div className="testimonial-main">
                            <div className="testimonial-body">
                              <p>I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!</p>
                            </div>
                          </div>
                          <div className="testimonial-footer">
                            <div className="testimonial-name"><a href="/#">@mikesmith</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial text-sm is-revealing">
                        <div className="testimonial-inner">
                          <div className="testimonial-main">
                            <div className="testimonial-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien. Quisque egestas diam in arcu cursus euismod quis.</p>
                            </div>
                          </div>
                          <div className="testimonial-footer">
                            <div className="testimonial-name"><a href="/#">@mikesmith</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pricing section">
                <div className="container">
                  <div className="pricing-inner section-inner">
                    <h2 className="section-title mt-0 text-center">Pricing</h2>
                    <div>
                      <div className="pricing-tables-wrap">
                        <div className="pricing-table is-revealing">
                          <div className="pricing-table-inner">
                            <div className="pricing-table-main">
                              <div className="pricing-table-header mb-24 pb-24">
                                <div className="pricing-table-title h4 mt-0 mb-16">Startup</div>
                                <div className="pricing-table-price"><span className="pricing-table-price-currency">$</span><span className="pricing-table-price-amount h1">29</span>/m</div>
                              </div>
                              <ul className="pricing-table-features list-reset text-xs">
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                              </ul>
                            </div>
                            <div className="pricing-table-cta">
                              <a className="button button-secondary button-shadow button-block" href="/#">Get started</a>
                            </div>
                          </div>
                        </div>

                        <div className="pricing-table is-revealing">
                          <div className="pricing-table-inner">
                            <div className="pricing-table-main">
                              <div className="pricing-table-header mb-24 pb-24">
                                <div className="pricing-table-title h4 mt-0 mb-16">Enterprise</div>
                                <div className="pricing-table-price"><span className="pricing-table-price-currency">$</span><span className="pricing-table-price-amount h1">49</span>/m</div>
                              </div>
                              <ul className="pricing-table-features list-reset text-xs">
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                                <li>
                                  <span>Lorem ipsum dolor sit amet</span>
                                </li>
                              </ul>
                            </div>
                            <div className="pricing-table-cta">
                              <a className="button button-primary button-shadow button-block" href="/#">Get started</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="pricing-faqs container-sm is-revealing">
                      <h4 className="mt-40 mb-32">FAQs</h4>
                      <ul className="accordion">
                        <li>
                            <div className="accordion-title">
                              <span>In a professional context it often happens that private?</span>
                              <div className="accordion-icon"></div>
                            </div>
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </li>
                        <li>
                          <div className="accordion-title">
                            <span>Lorem ipsum dolor sit amet, consectetur</span>
                            <div className="accordion-icon"></div>
                          </div>
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam semper. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                        </li>
                        <li>
                          <div className="accordion-title">
                            <span>In a professional context it often happens that private?</span>
                            <div className="accordion-icon"></div>
                          </div>
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                          </div>
                        </li>
                        <li>
                          <div className="accordion-title">
                            <span>Lorem ipsum dolor sit amet, consectetur</span>
                            <div className="accordion-icon"></div>
                          </div>
                          <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam semper. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="cta section">
                <div className="container">
                  <div className="cta-inner section-inner is-revealing">
                    <h3 className="section-title mt-0">Still not convinced?</h3>
                    <div className="cta-cta">
                      <a className="button button-primary button-shadow" href="/#">Schedule a live demo</a>
                    </div>
                  </div>
                </div>
              </section>
          
          </main>


          <footer className="site-footer">
            <div className="container">
                <div className="site-footer-inner">
                    <div className="brand footer-brand">
                        <a href="/#">
                            <img src={themeImages.main} alt="Blue logo" />
                        </a>
                    </div>
                    <ul className="footer-links list-reset">
                        <li>
                            <a href="/#">Contact</a>
                        </li>
                        <li>
                            <a href="/#">About us</a>
                        </li>
                        <li>
                            <a href="/#">FAQ's</a>
                        </li>
                        <li>
                            <a href="/#">Support</a>
                        </li>
                    </ul>
                    <ul className="footer-social-links list-reset">
                        <li>
                            <a href="/#">
                                <span className="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <span className="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <span className="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright">&copy; 2018 Blue, all rights reserved</div>
                </div>
            </div>
          </footer>

          
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
