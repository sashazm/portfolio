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
      echo "Hello";
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
        {/* photo */}
        <div className="intro__photo intro__photo--desktop"></div>
      </header>

      <p className="intro__text">
        I am a Front-End developer living in California with a focus on using
        semantic markup and scalable CSS and JavaScript to build highly
        performant and responsive websites. I specialize in turning design
        concepts into working themes in Drupal, Wordpress, and React.
      </p>

      <div className="content-divider content-divider--contact">
        <FaCommentAlt className="content-divider__icon content-divider__icon--contact" />
        <a
          href="#contact-info"
          className="content-divider__text content-divider__text--contact"
        >
          Contact Me
        </a>
      </div>
    </article>
  )
}

export default Intro
