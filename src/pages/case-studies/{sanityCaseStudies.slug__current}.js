import { PortableText } from "@portabletext/react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function CaseStudy({ data }) {
    const sanity = data.sanityCaseStudies
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <div className="text-center">
                        <h1 className="h1">{sanity.title}</h1>
                        <div className="my-20">
                            <GatsbyImage
                                image={sanity.image.asset.gatsbyImageData}
                                className="border"
                            />
                        </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="md:w-3/5">
                            <PortableText
                                value={sanity._rawContent}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
query ($id: String) {
    sanityCaseStudies(id: {eq: $id}) {
      _rawContent
      seo {
        meta_description
        title_tag
      }
      title
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
  
`