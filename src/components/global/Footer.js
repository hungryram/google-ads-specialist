import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import Social from "./Social"

export default function Footer({ email, phone }) {
    return (
        <>
            <StaticQuery
                query={graphql`
                {
                    sanityProfileSettings {
                      contact_information {
                        phone_number
                        email
                      }
                    }
                    allSanityLegal {
                      nodes {
                        title
                        slug {
                          current
                        }
                      }
                    }
                  }
                  
                  
            `}
                render={data => (
                    <>
                        <footer style={{
                            backgroundColor: '#111111'
                        }}>
                            <div className="section text-white">
                                <div className="container">
                                    <h2 className="h2">Let's Get Started</h2>
                                    <div className="my-10">
                                        <ul>
                                            <li>
                                                <a href={`mailto: ${data.sanityProfileSettings.contact_information.email}`}>{data.sanityProfileSettings.contact_information.email}</a>
                                            </li>
                                            <li>
                                                <a href={`tel: ${data.sanityProfileSettings.contact_information.phone_number}`}>{data.sanityProfileSettings.contact_information.phone_number}</a>

                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex">
                                            <div className="md:w-1/2">
                                                <Social />
                                            </div>
                                            <div className="md:w-1/2 md:text-right">
                                                <ul>
                                                    {data.allSanityLegal.nodes.map((node) => {
                                                        return (
                                                            <li className="inline-block mx-3 text-sm">
                                                                <a href={"legal/" + node.slug.current}>{node.title}</a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </>
                )}
            />
        </>
    )
}