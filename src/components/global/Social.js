import { graphql, StaticQuery } from "gatsby"
import * as React from "react"

export default function Social({ email, phone }) {
    return (
        <>
            <StaticQuery
                query={graphql`
                {
                    sanityProfileSettings {
                      social {
                        youtube
                        yelp
                        twitter
                        reddit
                        tiktok
                        pinterest
                        linkedin
                        instagram
                        facebook
                      }
                    }
                  }                  
                
                `}
                render={data => (
                    <>
                        <ul>
                            <li className="inline-block">
                                {data.sanityProfileSettings.social.youtube && <a href={data.sanityProfileSettings.social.youtube}>Youtube</a>}
                                {data.sanityProfileSettings.social.linkedin && <a href={data.sanityProfileSettings.social.linkedin}>Linkedin</a> }
                            </li>
                        </ul>
                    </>
                )}
            />
        </>
    )
}