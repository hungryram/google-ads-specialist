import { PortableText } from "@portabletext/react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"


export default function Intro({ content, image, altTag }) {
    return (
        <>
            <div className="section" style={{
                backgroundColor: '#F9F9F9'
            }}>
                <div className="container">
                    <div className="md:flex gap-10 content">
                        <div className="md:w-1/2">
                            <div>
                                <h2>Make your paid search marketing campaigns a <span className="accent">success</span></h2>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <PortableText
                                value={content}
                            />
                            <div className="my-10">
                                <Link to="/contact/" className="primary-button">Learn more <BsArrowRight className="inline text-2xl" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}