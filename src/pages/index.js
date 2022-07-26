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
        <div className="section">
          <div className="container">
            <div className="mb-10">
              <h2 className="h2 text-center">Our Services</h2>
            </div>
            <Slider {...serviceSettings}>
              {data.allSanityServices.nodes.map((node) => {
                return (
                  <Services
                    title={node.title}
                    link={"services/" + node.slug.current}
                    description={node.description}
                    svg={node.svgIcon}
                  />
                )
              })}
            </Slider>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="mb-20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <h2 className="h2">Case Studies</h2>
                </div>
                <div className="md:w-1/2 md:text-right">
                  <Link to="/case-studies/" className="accent">View all Case Study <BsArrowRight className="inline text-3xl" /></Link>
                </div>
              </div>
            </div>
            <Slider {...caseStudiesSettings}>
              {data.allSanityCaseStudies.nodes.map((node) => {
                return (
                  <CaseStudyCard
                    title={node.title}
                    link={"case-studies/" + node.slug.current}
                    image={node.image.asset.gatsbyImageData}
                  />
                )
              })}
            </Slider>
          </div>
        </div>

        <Intro
              content={home.intro._rawContent}
              image={home.intro.image.asset.gatsbyImageData}
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
  }
  allSanityServices {
    nodes {
      slug {
        current
      }
      title
      description
      svgIcon
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