import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/home/Hero"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../components/home/Services"
import CaseStudyCard from "../components/home/CaseStudyCard"

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import Intro from "../components/home/Intro"
import Seo from "../components/global/Seo"
import Banner from "../components/home/Banner"
import SecondIntro from "../components/home/secondIntro"
import Closing from "../components/global/Closing"

export default function Index({ data }) {

  const home = data.sanityHomeContent

  const serviceSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const caseStudiesSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Layout>
        <Seo
          title={data.sanityProfileSettings.seo.title_tag}
          description={data.sanityProfileSettings.seo.meta_description}
        />
        <Hero
          heading={home.hero.heading}
          subHeading={home.hero.subHeading}
          buttonLabel={home.hero.buttonLabel}
          buttonLink={home.hero.link.current}
          image={home.hero.image.asset.gatsbyImageData}
        />

        <Intro
          content={data.sanityHomeContent.intro._rawContent}
          altTag={data.sanityHomeContent.intro.altTag}
          image={data.sanityHomeContent.intro.image.asset.gatsbyImageData}
        />

        <SecondIntro />

        <Banner
          content={home.banner._rawContent}
        />

        <div className="section">
          <div className="container">
            <div className="mb-10">
              <h2 className="h2 text-center">Our Services</h2>
            </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch">
              {data.allSanityServices.nodes.map((node) => {
              return (
                <Services
                  title={node.title}
                  link={"services/" + node.slug.current}
                  description={node.description}
                />
              )
            })}
              </div>
          </div>
        </div>

        <Closing
          heading="Ready to speak with a marketing expert? Give us a ring"
          text="Harness the Full Power of AdWords with a Google AdWords Agency"
        />
      </Layout>
    </>
  )
}

export const query = graphql`
{
  sanityHomeContent {
    hero {
      heading
      subHeading
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      link {
        current
      }
      buttonLabel
    }
    intro {
      image_alt
      _rawContent
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    banner {
      _rawContent
    }
    second {
      _rawContent
      blocks {
        text
        heading
      }
    }
  }
  allSanityServices {
    nodes {
      slug {
        current
      }
      title
      description
    }
  }
  allSanityCaseStudies {
    nodes {
      slug {
        current
      }
      title
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.5)
        }
      }
    }
  }
  sanityProfileSettings {
    seo {
      title_tag
      meta_description
    }
  }
}

`