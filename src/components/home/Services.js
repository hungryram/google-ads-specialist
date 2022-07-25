import * as React from "react"
import { Link } from "gatsby"

export default function Services({ title, description, link, svg }) {
    return (
        <>
            <Link to={link}>
                <div className="text-center p-5 border mx-2 rounded-md content py-20 hover:shadow-lg transition-all">
                    <div className="svg" dangerouslySetInnerHTML={{ __html: svg }} />
                    <h3 className="text-2xl font-medium mb-5">{title}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}
