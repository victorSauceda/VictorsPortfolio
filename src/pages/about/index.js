/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from './index.module.less'

export const aboutPropTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    flagIt: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }),
    }),
    flagEn: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }),
    }),
    skillIcons: PropTypes.object.isRequired,
    toolIcons: PropTypes.object.isRequired,
  }),
}

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
    let {
      profilePhoto,
      codingForFun,

      skillIcons,
    } = this.props.data
    return (
      <Layout>
        <SEO
          title="About"
          description="A brief summary of this blog"
          path="about"
        />
        <div className={style.container}>
          <div className={style.photo}>
            <Img fluid={profilePhoto.childImageSharp.fluid} />
          </div>
          <div className={style.content}>
            <h1>Hi, I'm Victor</h1>
            <h2>Software Engineer</h2>
            <p></p>
            <div style={{ margin: 'auto' }} className={style.photo}>
              <Img fluid={codingForFun.childImageSharp.fluid} />
            </div>
            <p>
              I am a software engineer at Code for America. I am developing a
              web application for a justice-impacted population of ~3500
              individuals. I leverage technology to make resources more
              accessible for everyone in the community. I am using Typescript,
              React, Nodejs, Postgres, Aptiblle, Twilio, and Mapbox in the
              current iteration of the application. I have gained experience in
              user testing, project management, user research, marketing, event
              hosting, video editing and more. <br />
              <br /> I have experience in AWS, MongoDB, Airtable, Smartsheets,
              MaterialUI, Azure, Python. <br />
              <br />I am passionate about technology. I am always finding ways
              to sharpen my skill set and understand all that is out there. I am
              involved with a male leadership fitness organization called
              <b style={{ textDecoration: 'underline' }}>
                {' '}
                <a
                  href="https://calendly.com/victorasauceda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: '1rem' }}
                >
                  F3
                </a>
              </b>
              . I enjoy finding ways to give back to my community through
              technology, justice reform advocacy, fitness, education, and much
              more. I volunteer as a facilitator every Saturday for Defy
              Ventures a program that assists individuals in their
              entrepreneurial journey. I am sure that I can leverage my skillet
              to benefit the advancement of your company. Feel free to reach out
              to me at
              <b style={{ textDecoration: 'underline' }}>
                {' '}
                <a
                  href="https://calendly.com/victorasauceda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: '1rem' }}
                >
                  victorasauceda@gmail.com
                </a>
              </b>{' '}
              at any time or schedule an appointment on my{' '}
              <b style={{ textDecoration: 'underline' }}>
                {' '}
                <a
                  href="https://calendly.com/victorasauceda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: '1rem' }}
                >
                  calendar
                </a>
              </b>
            </p>
            <br />
            <h2>Skills</h2>
            <ImageList edges={skillIcons.edges} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const imageListPropTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
}

class ImageList extends React.Component {
  static propTypes = imageListPropTypes

  render = () => (
    <div className={style.iconsContainer}>
      {this.props.edges
        .sort((edgeA, edgeB) =>
          edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1
        )
        .map(({ node: { name, childImageSharp } }) => (
          <div
            style={{ width: '10rem', height: '3rem', padding: '1rem' }}
            className={style.iconWrapper}
            key={name}
          >
            <Img
              fixed={childImageSharp.fixed}
              alt={name + ' logo'}
              title={name}
            />
            <label>
              {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
            </label>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "victor" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    codingForFun: file(name: { eq: "code" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
// Use to set specific icons names
export const iconsNameMap = {
  aws: 'AWS',
  css: 'CSS',
  html: 'HTML',
  jquery: 'JQuery',
  nodejs: 'Node.js',
  vuejs: 'Vue.js',
  gruntjs: 'Grunt.js',
}

export default About
