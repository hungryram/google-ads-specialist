import { Link } from "gatsby"
import { PortableText } from "@portabletext/react"
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Banner({ content }) {
    return (
        <>
            <div className="section banner-section">
                <div className="container">
                    <div className="flex justify-center text-center">
                        <div className="md:w-3/5 text-white content">
                            <PortableText
                                value={content}
                            />
                            <div className="mt-6">
                            <div className="my-6">
                                <Link to="/contact/" className="primary-button">Learn more</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}