import PropTypes from "prop-types"
import React from "react"
import ReactTextRotator from "react-text-rotator"
import { FaCommentAlt } from "react-icons/fa"

const Intro = () => {
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
    <article className="intro">
      <header>
        <h2 content__title>
          Hello:{" "}
          <ReactTextRotator
            content={content}
            time={3000}
            startDelay={250}
            transitionTime={200}
          />
        </h2>
        <h1 className="intro__title">
          Sasha
          <span className="intro__title--alt">Miller</span>
        </h1>

        <div className="intro__photo"></div>
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
