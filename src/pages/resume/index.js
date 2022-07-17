/* Vendor imports */
import React, { useEffect, useState } from 'react'

/* App imports */
import SEO from '../../components/seo'
import Button from '@mui/material/Button'
import Layout from '../../components/layout'
import pageonemobile from '../../../src/images/page1mobile.png'
import pagetwomobile from '../../../src/images/page2mobile.png'
import pagethreemobile from '../../../src/images/page3mobile.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
const Resume = () => {
  const numPages = 3
  const [pageNumber, setPageNumber] = useState(1)
  const googleResumeLink =
    'https://docs.google.com/document/d/1IhfCMydMuDxSnAXB4oVpfMR2t2T4JTaLQ-BRhG5kqY4/pub?embedded=true'
  const [resume, setResume] = useState(googleResumeLink)
  const matchesMin = useMediaQuery('(min-width:1275px)')

  useEffect(() => {
    if (matchesMin) {
      setResume(googleResumeLink)
    } else {
      setResume(pageonemobile)
    }
  }, [matchesMin])

  const goToPrevPage = () => {
    if (pageNumber === 3) {
      setPageNumber(2)
      setResume(pagetwomobile)
    } else {
      setPageNumber(1)
      setResume(pageonemobile)
    }
  }
  const goToNextPage = async () => {
    if (pageNumber === 1) {
      setPageNumber(2)
      setResume(pagetwomobile)
    } else {
      setPageNumber(3)
      setResume(pagethreemobile)
    }
  }
  return (
    <Layout>
      <SEO
        title="Resume"
        description="Learn more about my experience and skillset..."
        path="resume"
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        {resume === googleResumeLink ? (
          <iframe
            scrolling="no"
            frameBorder="none"
            style={{
              width: matchesMin ? '50%' : '95%',
              height: matchesMin ? '120rem' : '260rem',
              margin: 'auto',
              overflow: 'hidden',
            }}
            src={googleResumeLink}
          ></iframe>
        ) : (
          <img style={{ width: '20rem' }} src={resume} alt="resume" />
        )}
      </div>
      <a
        href={`https://docs.google.com/document/d/1IhfCMydMuDxSnAXB4oVpfMR2t2T4JTaLQ-BRhG5kqY4/export?format=pdf`}
        download="VictorSaucedaResume"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <p
          style={{
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
          }}
        >
          {' '}
          Download
          <ArrowCircleDownIcon
            style={{
              display: 'flex',
              marginLeft: '.6rem',
            }}
          />
        </p>
      </a>
      {!matchesMin && (
        <>
          <nav
            style={{
              display: 'flex',
              textAlign: 'center',
              margin: 'auto',
              justifyContent: 'center',
              marginLeft: ` ${matchesMin} ? '0rem' : '8rem'`,
              marginTop: '1rem',
              zIndex: 20,
            }}
          >
            <Button
              disabled={pageNumber === 1}
              style={{ color: pageNumber === 1 ? 'gray' : '#75B0BE' }}
              onClick={goToPrevPage}
            >
              Prev
            </Button>
            <Button
              disabled={pageNumber === 3}
              style={{ color: pageNumber === 3 ? 'gray' : '#75B0BE' }}
              onClick={goToNextPage}
            >
              Next
            </Button>
          </nav>
          <p
            style={{
              display: 'flex',
              // flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '0rem',
            }}
          >
            Page {pageNumber} of {numPages}
          </p>
        </>
      )}
    </Layout>
  )
}
export default Resume
