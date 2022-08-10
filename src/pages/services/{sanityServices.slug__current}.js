import { PortableText } from "@portabletext/react"
import { graphql, Link } from "gatsby"
import * as React from "react"
import Closing from "../../components/global/Closing"
import Layout from "../../components/global/Layout"
import Seo from "../../components/global/Seo"
import Banner from "../../components/templates/Banner"

export default function Services({ data }) {
  const allServices = data.allSanityServices
    return (
        <>
            <Layout>
              <Seo
                title={data.sanityServices.seo.title_tag}
                description={data.sanityServices.seo.meta_description}
              />
              <Banner
                heading={data.sanityServices.title}
                link="/contact/"
                label="GET YOUR FREE MARKETING PLAN"
              />
              <div className="section">
                <div className="container">
                  <div className="md:flex gap-20">
                    <div className="md:w-2/5">
                      <div className="bg-slate-200 p-8">
                        <h2 className="font-bold mb-8 text-lg">View more services</h2>
                        <ul>
                          {allServices.nodes.map((node) => {
                            return (
                              <li className="my-2 px-2 bg-white"><Link to={"/services/" + node.slug.current} className="block w-full h-full py-4">{node.title}</Link></li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-3/5 content">
                      <PortableText
                        value={data.sanityServices._rawContent}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Closing
                  heading={`Ready to Take Advantage of ${data.sanityServices.title}?`}
                  text="Contact us and get started with a free consultation"
              />
            </Layout>
        </>
    )
}

export const query = graphql`
query ($id: String) {
  sanityServices(id: {eq: $id}) {
    _rawContent
    seo {
      title_tag
      meta_description
    }
    title
  }
  allSanityServices {
    nodes {
      slug {
        current
      }
      title
    }
  }
}

`