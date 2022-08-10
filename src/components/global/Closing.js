import * as React from "react"
import { Link } from "gatsby"

export default function Closing({ heading, text }) {
    return (
        <>
            <div className="section" style={{
                backgroundColor: '#F5F5F5'
            }}>
                <div className="container">
                    <div className="flex justify-center text-center">
                        <div className="md:w-1/2 content">
                            {heading && <h2>{heading}</h2>}
                            {text && <p>{text}</p>}
                            <div className="mt-10">
                                <Link to="/contact/" className="primary-button">Free consultation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}