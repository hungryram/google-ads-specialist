import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import CaseStudyCard from "../../components/home/CaseStudyCard"
import Banner from "../../components/templates/Banner"

export default function CaseStudyIndex({ data }) {
    return (
        <>
            <Layout>
            <Banner
                    heading="Our Case Studies"
                    body="Learn how we have generated leads and positive ROI for businesses."
                    label="Contact"
                    link="/contact"
                />
                <div className="section">
                    <div className="container">
                        <div className="grid grid-cols-2 gap-y-16">
                        {data.allSanityCaseStudies.nodes.map((node) => {
                            return (
                                <>
                                    <CaseStudyCard
                                        image={node.image.asset.gatsbyImageData}
                                        link={node.slug.current}
                                        title={node.title}
                                    />
                                </>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityCaseStudies {
      nodes {
        title
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.5)
          }
        }
      }
    }
  }
`