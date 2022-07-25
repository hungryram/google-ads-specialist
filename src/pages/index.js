import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/home/Hero"

export default function Index({ data }) {

  const home = data.sanityHomeContent
  return (
    <>
    <Layout>
      <Hero
        heading={home.hero.heading}
        subHeading={home.hero.subHeading}
        buttonLabel={home.hero.buttonLabel}
        buttonLink={home.hero.link.current}
        image={home.hero.image.asset.gatsbyImageData}
      />
    </Layout>
    </>
  )
}

export const query = graphql`
{
  sanityHomeContent {
    hero {
      heading
      subHeading
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      link {
        current
      }
      buttonLabel
    }
  }
}


`