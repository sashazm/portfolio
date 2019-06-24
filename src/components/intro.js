import PropTypes from "prop-types"
import React from "react"
import ReactTextRotator from "react-text-rotator"
import { FaCommentAlt } from "react-icons/fa"

const Intro = ({ data }) => {
  const content = [
    {
      text: "Hello",
      animation: "fade",
    },
    {
      text: "Вiтаю Вас",
      animation: "fade",
    },
    {
      text: "Добро Пожаловать",
      animation: "fade",
    },

    {
      text: "console.log('Hello')",
      animation: "fade",
    },

    {
      text: `<?php
      echo "Hello world!";
      ?>`,
      animation: "fade",
    },
  ]

  return (
    <article>
      <header className="intro">
        <div className="intro__photo"></div>
        {/* title for the component */}
        <h1 id="about" className="intro__title">
          Sasha
          <span className="intro__title--alt">Miller</span>
        </h1>
        {/* rotating text greeting */}
        <div className="intro__greeting">
          <h2 className="intro__greeting-rotator">
            Hello:{" "}
            <ReactTextRotator
              content={content}
              time={3000}
              startDelay={250}
              transitionTime={200}
            />
          </h2>
        </div>
        <div className="intro__photo intro__photo--desktop"></div>
        {/* photo */}
        <p className="intro__text">
          Front End Web Developer, living in Lodi, California. I am relentlessly
          pursuing a career in web-design and development and my goal is to work
          in a place that encourages personal growth and offers practical
          experience in current web technologies. In particular, I am interested
          in learning Drupal9 and gaining more experience with D8.
        </p>

        <div className="content-divider content-divider--contact">
          <FaCommentAlt className="content-divider__icon content-divider__icon--contact" />
          <a
            href="/"
            className="content-divider__text content-divider__text--contact"
          >
            Contact Me
          </a>
        </div>
      </header>
    </article>
  )
}

export default Intro
