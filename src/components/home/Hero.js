import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


export default function Hero({ heading, buttonLabel, buttonLink, image }) {
    return (
        <>
            <div className="section">
                <div className="container text-center">
                    <div className="mb-20">
                        <h1 className="md:text-5xl text-3xl font-bold leading-loose heroHeading">{heading}</h1>
                        <div className="mt-10">
                            <Link to={buttonLink} className="primary-button">{buttonLabel}</Link>
                        </div>
                    </div>
                </div>
                <div className="md:px-40 px-4">
                    <div>
                        <GatsbyImage
                            image={image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}