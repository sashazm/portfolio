import React from "react"
import { FaExternalLinkSquareAlt } from "react-icons/fa"

const CodeButton = props => {
  const href = props.href
  const myClassName = props.className ? props.className : ""
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`code-button u-inline ${myClassName}`}
    >
      <span className="code-button--upper">view</span>code
      <FaExternalLinkSquareAlt className="external-link-icon" />
    </a>
  )
}

export default CodeButton
