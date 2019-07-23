import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaCommentAlt } from "react-icons/fa"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content-divider content-divider--not-found">
      <FaCommentAlt className="content-divider__icon content-divider__icon--contact" />
      <h1 className="content-divider__text content-divider__text--not-found">
        NOT FOUND
      </h1>
    </div>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
