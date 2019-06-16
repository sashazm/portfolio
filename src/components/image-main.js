import React from "react"
// import poster from "../images/creativity-small.png"

const ImageMain = () => {
  return (
    <>
      <div className="featured-image">
        <div>
          {/* Curved Text */}
          <svg
            viewBox="-15 100 500 100"
            preserveAspectRatio="xMinYMid"
            className="curved-text"
          >
            <path
              className="curved-text__curve-transparent"
              id="curve"
              d="M16.2,148.6c4-6.1,65.5-96.8,178.6-92.3c101.3,1.2,130.8,90.3,175.1,97"
            />
            <text>
              <textPath xlinkHref="#curve" className="curved-text__text">
                Creativity is intelligence having fun
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  )
}

export default ImageMain
