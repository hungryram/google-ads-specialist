import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight"


const Footer = () => {
    return (
        <StaticQuery
            query={graphql`
            {
                sanityProfileSettings {
                  company_name
                  contact_information {
                    phone_number
                    email
                  }
                  address {
                    zip_code
                    state
                    city
                    address
                  }
                }
                allSanityLegal {
                  nodes {
                    slug {
                      current
                    }
                    title
                  }
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
                            
            `}
            render={data => (
                <>
                    <footer style={{
                        backgroundColor: '#0b0b0b'
                    }}>
                        <div className="section">
                            <div className="container">
                                <div className="md:flex flex-none gap-20 text-white">
                                    <div className="md:w-3/5">
                                        <Link to="/">
                                            <h1 class="font-bold text-2xl mb-10">George<span class="accent"> Aguilar</span></h1>
                                        </Link>
                                        <div>
                                            <p className="text-gray-400 font-thin">Ready to scale your business to the next level with digital marketing? Talk to a growth expert today.</p>
                                            <ul className="mt-10">
                                                <li className="my-2">Email: <a href={`mailto:${data.sanityProfileSettings.contact_information.email}`}>{data.sanityProfileSettings.contact_information.email}</a></li>
                                                <li className="my-2">Phone: <a href={`tel:${data.sanityProfileSettings.contact_information.phone_number}`}>{data.sanityProfileSettings.contact_information.phone_number}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="md:w-2/5">
                                        <h3 className="mb-10 font-bold">Services</h3>
                                        <ul className="text-gray-400 columns-2">
                                            {data.allSanityServices.nodes.map((node) => {
                                                return (
                                                    <li className="mb-4 font-thin"><Link to={"/services/" + node.slug.current}>{node.title}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="footer-credit p-4 text-white" style={{ backgroundColor: 'black' }}>
                        <div className="container">
                            <div className="md:flex">
                                <div className="md:w-full">
                                    <p className="text-sm font-light pt-0">&copy; Copyright {new Date().getFullYear()} &middot; {data.sanityProfileSettings.company_name} &middot; Website built by <Link to="https://www.hungryram.com/" className="accent">Hungry Ram</Link></p>
                                </div>
                                <div className="m:w-1/2 w-full md:text-right">
                                    <ul>
                                        {data.allSanityLegal.nodes.map((node) => {
                                            return (
                                                <li className="inline mx-2 text-sm font-light"><Link to={"/legal/" + node.slug.current}>{node.title}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: `<script> gtag('config', 'AW-10967299290/CWC7CJuIxtwDENrpzu0o', { 'phone_conversion_number': '(951) 481-9612' }); </script>` }}/>
                </>
            )}
        />
    )
}

export default Footer