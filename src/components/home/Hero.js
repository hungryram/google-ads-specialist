import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


export default function Hero({ heading, buttonLabel, buttonLink, image, subHeading }) {
    return (
        <>
            <>
                <div className="hero relative flex items-center">
                    <GatsbyImage
                        image={image}
                        alt="Commercial building"
                        className="object-cover lg:h-[45rem] w-full h-[30rem]"
                    />
                    <div className="overlay"></div>
                    <div className="container absolute justify-center flex top-1/4 bottom-0 left-0 right-0 text-white text-center">
                        <div className="md:w-3/5">
                        <h1 className="md:text-5xl text-3xl font-medium" style={{ lineHeight: '1.2' }}>{heading}</h1>
                        <p className="m-10 text-lg">{subHeading}</p>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}