import * as React from "react"
import { Link } from "gatsby"

export default function Banner({ heading, body, link, label }) {
    return (
        <>
            <div className="section" style={{
                backgroundColor: '#060606'
            }}>
                <div className="container text-white">
                    <div className="flex justify-center">
                        <div className="md:w-3/5">
                            <div className="text-center">
                                <h1 className="h1">{heading}</h1>
                                {body &&
                                    <div className="my-6">
                                        <p>{body}</p>
                                    </div>
                                }
                                <div className="my-10">
                                    <Link to={link} className="primary-button">{label}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}