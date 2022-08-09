import { PortableText } from "@portabletext/react"
import { StaticQuery, graphql } from "gatsby"
import * as React from "react"

export default function SecondIntro() {
    return (
        <StaticQuery
            query={graphql`
            {
                sanityHomeContent {
                  second {
                    blocks {
                      text
                      heading
                    }
                    _rawContent
                  }
                }
              }
            `}
            render={data => (
                <>
                    <div className="section home-section">
                        <div className="container content">
                            <div className="md:w-3/5">
                                <PortableText
                                    value={data.sanityHomeContent.second._rawContent}
                                />
                            </div>
                            <div className="grid md:grid-cols-3 gap-10 mt-20 items-stretch">
                                {data.sanityHomeContent.second.blocks.map((node) => {
                                    return (
                                        <div>
                                            <div className="border p-6 h-full">
                                                <h3>{node.heading}</h3>
                                                <p>{node.text}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        />
    )
}