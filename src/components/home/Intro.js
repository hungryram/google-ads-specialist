import { PortableText } from "@portabletext/react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"


export default function Intro({ content, image, altTag }) {
    return (
        <>
            <div className="section" style={{
                backgroundColor: '#17191B'
            }}>
                <div className="container">
                    <div className="md:flex items-center gap-10">
                        <div className="md:w-1/2">
                            <div className="intro-content text-white mb-10">
                            <PortableText
                                value={content}
                            />
                            <div className="my-6">
                                <Link to="/contact/" className="underline">Learn more <BsArrowRight className="inline text-3xl" /></Link>
                            </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <GatsbyImage
                                image={image}
                                alt={altTag}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}