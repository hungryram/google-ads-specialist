import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/global/Layout"

export default function Services({ data }) {
    return (
        <>
            <Layout>

            </Layout>
        </>
    )
}

export const query = graphql`
query($id: String){
    sanityServices(id: {eq: $id}) {
      _rawContent
      seo {
        title_tag
        meta_description
      }
      title
    }
  }
  
`