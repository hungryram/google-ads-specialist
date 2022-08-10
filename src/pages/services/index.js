import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Services from "../../components/home/Services"
import Banner from "../../components/templates/Banner"
import Closing from "../../components/global/Closing"
import Seo from "../../components/global/Seo"

export default function ServicesIndex({ data }) {
    return (
        <>
            <Layout>
                <Seo
                    title="Digital Marketing Services | Google Ads Specialist"
                    description="George Aguilar is an expert in Google Ads and has worked with industry leading brands to promote growth. Contact your Google Ads Specialist today."
                />
                <Banner
                    heading="We'll Make You Excessively More Money Than Any Other Marketing Team"
                    body="All the pieces it takes to solve your marketing puzzle, all under the same roof."
                    label="Contact"
                    link="/contact"
                />
                <div className="section">
                    <div className="container">
                        <div className="flex justify-center">
                            <div className="md:w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    {data.allSanityServices.nodes.map((node) => {
                                        return (
                                            <>
                                                <Services
                                                    title={node.title}
                                                    description={node.description}
                                                    link={node.slug.current}

                                                />
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Closing
                  heading="Have questions about our services?"
                  text="Contact us and get started with a free consultation"
              />
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityServices {
      nodes {
        title
        description
        slug {
          current
        }
      }
    }
  }
`