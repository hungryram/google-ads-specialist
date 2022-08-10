import * as React from "react"
import Layout from "../components/global/Layout"
import Banner from "../components/templates/Banner"

export default function Thanks() {
    return (
        <>
            <Layout>
                <Banner
                    heading="Thank you"
                />
                <div className="section">
                    <div className="container">
                        <h2 className="text-2xl">Thank you!</h2>
                        <p>Our team will reach out to you shortly</p>
                        <div className="mt-10">
                        <Link to="/" className="primary-button">Return Home</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}