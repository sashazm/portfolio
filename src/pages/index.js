import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Custom components
import Intro from "../components/intro"
import CaseStudy from "../components/case-study"
import "typeface-montserrat"
import ProjectsTeaser from "../components/projects-teaser"
import ContactInfo from "../components/contact-info"
// Load Saira Extra Condensed typeface
require("typeface-saira-extra-condensed")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <CaseStudy />
    <ProjectsTeaser />
    <ContactInfo />
  </Layout>
)

export default IndexPage
