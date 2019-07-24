import React from "react"

const ImageMain = () => {
  return (
    <div className="featured-image">
      <p className="featured-image__title">
        <span className="featured-image__title-part featured-image__title-part--1">
          Creativity is
        </span>
        <span className="featured-image__title-part featured-image__title-part--2">
          intelligence
        </span>
        <span className="featured-image__title-part featured-image__title-part--3">
          having fun.
        </span>
      </p>
      <span
        className="featured-image--accessibility"
        role="img"
        aria-label="Creativity is intelligence having fun"
      ></span>
    </div>
  )
}

export default ImageMain
