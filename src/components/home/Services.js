import * as React from "react"
import { Link } from "gatsby"

export default function Services({ title, description, link, svg }) {
    return (
        <>
            <Link to={link}>
                <div className="px-4 py-8 border transition-all ease-in-out h-full service-card">
                    <div className="svg justify-center flex" dangerouslySetInnerHTML={{ __html: svg }} />
                    <h3 className="text-lg font-medium mb-5">{title}</h3>
                    <p className="font-light">{description}</p>
                </div>
            </Link>
        </>
    )
}
