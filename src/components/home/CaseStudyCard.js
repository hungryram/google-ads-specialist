import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"

export default function CaseStudyCard({ image, title, link }) {
    return (
        <>
            <div className="mx-4">
                <GatsbyImage
                    image={image}
                    alt=""
                    className="border"

                />
                <div className="py-10">
                    <h2 className="md:text-3xl text-xl font-bold">{title}</h2>
                    <div className="mt-6">
                        <Link to={link} className="accent">View Case Study <BsArrowRight className="inline text-3xl" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}