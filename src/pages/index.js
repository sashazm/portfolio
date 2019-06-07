import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
  </Layout>
)

export default IndexPage
