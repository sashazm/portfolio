import React from "react"

const CodeButton = props => {
  const href = props.href
  const myClassName = props.className ? props.className : ""
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`code-button u-inline ${myClassName}`}
      title={props.title}
    >
      <span className="code-button--upper">view</span>code
    </a>
  )
}

export default CodeButton
