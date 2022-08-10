import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import ContactForm from "../components/templates/Form"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"


export default function Contact({ data }) {
    const profile = data.sanityProfileSettings.contact_information
    const social = data.sanityProfileSettings.social
    return (
        <>
            <Layout>
                <div className="section">
                    <div className="container">
                        <div className="md:flex">
                            <div className="md:w-2/5">
                                <h2 className="h1 mb-10">Ready to get <strong className="accent">started</strong>?</h2>
                                <p>Ready to scale your business to the next level with digital marketing? Talk to a growth expert by filling out the form</p>
                                <div className="my-10">
                                    <ul>
                                        <li className="my-4 text-lg font-bold">
                                            <a href={`mailto: ${profile.email}`}>{profile.email}</a>
                                        </li>
                                        <li>
                                            <a href={`tel: ${profile.phone_number}`}>{profile.phone_number}</a>

                                        </li>
                                        <li className="mt-10">
                                            <Link to="" className="accent">Visit my Linkedin <BsArrowRight className="inline text-3xl" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-3/5">
                                <div>
                                    <ContactForm />
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
    sanityProfileSettings {
      contact_information {
        phone_number
        email
      }
      social {
        youtube
        yelp
        twitter
        tiktok
        reddit
        linkedin
        pinterest
        instagram
        facebook
      }
    }
  }
  
`