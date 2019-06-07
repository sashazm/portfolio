/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
// reset before applying your styles
import "../sass/normalize.scss"
import "../sass/styles.scss"


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
      // <!-- Site Navigation Area Start-->
      <div class="site__container">
        <div class="sidebar">
        <section class="sidebar__nav" tabindex="0">
          {/* <!-- Header Area Start--> */}
            <div class="site__info" >
              <h1 class="site__title" >Sashas Portfolio</h1>
              <p class="site__description">
                I'm a multilingual, based in Sacramento area.
              </p>
            </div>

            {/* <!-- Menu Links Start --> */}
            <nav class="menu__container">
              <ul class="menu menu--active">
                <li class="menu__item">
                  <a href="index.html" class="current menu__link">Home</a>
                  <div class="wave-container">
                    <div class="wave"></div>
                    <div class="wave wave--second"></div>
                    <div class="wave wave--third"></div>
                  </div>
                </li>
                <li class="menu__item">
                  <a href="about.html" class="menu__link">About</a>
                  <div class="wave-container">
                    <div class="wave"></div>
                    <div class="wave wave--second"></div>
                    <div class="wave wave--third"></div>
                  </div>
                </li>
                <li class="menu__item"><a href="scroll.html" class="menu__link">Hobbies</a></li>
                <li class="menu__item"><a href="contact.html" class="menu__link">Resume</a></li>
              </ul>
            </nav>
            {/* <!-- Footer Area Start --> */}
          <footer>
            <div class="site__footer">
              © 2018.
            </div>
          </footer>
        </section>

        {/* <!-- Media Links Area Start--> */}
        <section class="sidebar__social">

          {/* <!-- Social Media Links --> */}
           {/* <!-- Menu Toggle --> */}
          <div class="nav-toggle">
            <div class="nav-toggle__icon">1</div>
          </div>
          <a href="#" class="social-icon email"><i class="fas fa-at"></i>2</a>
          <a href="#" class="social-icon github"><i class="fab fa-github"></i>3</a>
          <a href="#" class="social-icon drupal"><i class="fab fa-drupal"></i>4</a>
          <a href="#" class="social-icon codepen"><i class="fab fa-codepen"></i>5</a>
          <a href="#" class="social-icon codecamp"><i class="fa fa-free-code-camp"></i>6</a>

        </section>
        </div> {/*<!-- sidebar end --> */}
        {/* <!-- Media Links Area End--> */}
        {/* <!-- Site Navigation Area End--> */}

        {/* <!-- Site Main Content Area Start--> */}
        <main class="content">
            <article class="content__intro">
              <h2 class="content__title">
                {/* {greeting = "Вiтаю Вас"}
                {greeting = "Добро Пожаловать"}
                {greeting = "Hello"} I'm Sasha */}
              </h2>
              <div class="content__text">
                <p>
                  I am a Front End Web Developer, living in Lodi CA. I've traveled all over America with the love of my life ...going to Drupal tech conferences. I've stayed up late eating pop corn and watching Web Development Presentations. I know five languages, three of them are spoken by humans :
                </p>
              </div>
            </article>

            {/* <!-- Single Portfolio Link --> */}
            <div class="projects__container">
                <article class="project">
                    <div class="project__container">
                      <h2>
                        <a href="single.html" class="project__title">Akame Hairsalon</a>
                      </h2>
                      <div>
                        <ul class="cat-links">
                          <li class="cat-links__single cat-links__single--alt">
                            <span>JavaScript</span>
                          </li>

                          <li class="cat-links__single">
                            <span>HTMl</span>
                          </li>

                          <li class="cat-links__single">
                            <span>SASS</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  {/* <!-- Single Portfolio Link --> */}
                  <article class="project">
                    <div class="project__container">
                      <h2>
                        <a class="project__title" href="single.html">Akame Hairsalon<br /><span class="project__title--alt">Guttenberg Blocks</span></a>
                      </h2>
                      <div>
                        <ul class="cat-links">
                          <li class="cat-links__single cat-links__single--alt">
                            <span>WordPress</span>
                          </li>

                          <li class="cat-links__single">
                            <span>React JS</span>
                          </li>

                          <li class="cat-links__single">
                            <span>JSX</span>
                          </li>

                          <li class="cat-links__single">
                            <span>PHP</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  {/* <!-- Single Portfolio Link --> */}
                  <article class="project">
                    <div class="project__container">
                      <h2>
                        <a href="single.html" class="project__title">Akame Hairsalon <br /><span class="project__title--alt">Gatsby JS.</span></a>
                      </h2>
                      <div >
                        <ul class="cat-links">
                          <li class="cat-links__single cat-links__single--alt">
                            <span>GraphQL</span>
                          </li>

                          <li class="cat-links__single">
                            <span>JSX</span>
                          </li>

                          <li class="cat-links__single">
                            <span>JavaScript</span>
                          </li>

                          <li class="cat-links__single">
                            <span>SASS</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  {/* <!-- Single Portfolio Link --> */}
                  <article class="project">
                    <div class="project__container">
                      <h2>
                        <a href="single.html" class="project__title">"The Little Prince"<br/> <span class="project__title--alt">Tribute page</span></a>
                      </h2>
                      <div>
                        <ul class="cat-links">

                          <li class="cat-links__single cat-links__single--alt">
                            <span>CodePen</span>
                          </li>

                          <li class="cat-links__single">
                            <span>HTML</span>
                          </li>

                          <li class="cat-links__single">
                            <span>CSS</span>
                          </li>

                          <li class="cat-links__single">
                            <span>JavaScript</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
            </div>


        {/* <!-- Main Content Area End --> */}
      </main>
        {/* // <!-- Featured Image Start --> */}
      <div class="site__container-featured-image">
        <div class="featured-image"></div>
      </div>
      {/* // <!-- Featured Image End --> */}

      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
