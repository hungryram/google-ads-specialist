import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"
import Services from "../../components/home/Services"
import Banner from "../../components/templates/Banner"

export default function ServicesIndex({ data }) {
    return (
        <>
            <Layout>
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
                                <div className="grid grid-cols-2 gap-10">
                                    {data.allSanityServices.nodes.map((node) => {
                                        return (
                                            <>
                                                <Services
                                                    title={node.title}
                                                    description={node.description}
                                                    link={node.slug.current}
                                                    svg={node.svgIcon}

                                                />
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
{
    allSanityServices {
      nodes {
        title
        svgIcon
        description
        slug {
          current
        }
      }
    }
  }
`