/* Vendor imports */
import React, { useEffect, useState } from 'react'

/* App imports */
import SEO from '../../components/seo'
import Button from '@mui/material/Button'
import Layout from '../../components/layout'
import pageone from '../../../src/images/page1.png'
import pageonemobile from '../../../src/images/page1mobile.jpg'
import pagetwo from '../../../src/images/Page2.png'
import pagetwomobile from '../../../src/images/Page2mobile.jpg'

import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
const Resume = () => {
  const [numPages, setNumPages] = useState(2)
  const [pageNumber, setPageNumber] = useState(1)
  const [resume, setResume] = useState(
    'https://docs.google.com/document/d/e/2PACX-1vQRQd7xAy5G5rNN5bLdTUAxNEk3NmCpa3OPQqyXfOhHnhmHUh8VJSAktmajyoapxoAF6VsCl3B_BuWL/pub?embedded=true'
  )
  const matchesMin = useMediaQuery('(min-width:1275px)')
  useEffect(() => {
    if (matchesMin) {
      setResume(
        'https://docs.google.com/document/d/e/2PACX-1vQRQd7xAy5G5rNN5bLdTUAxNEk3NmCpa3OPQqyXfOhHnhmHUh8VJSAktmajyoapxoAF6VsCl3B_BuWL/pub?embedded=true'
      )
    } else {
      setResume(pageonemobile)
    }
  }, [matchesMin])

  const goToPrevPage = () => {
    if (matchesMin) {
      setResume(pageone)
      setPageNumber(1)
    } else {
      setResume(pageonemobile)
      setPageNumber(1)
    }
  }
  const goToNextPage = () => {
    if (matchesMin) {
      setResume(pagetwo)
      setPageNumber(2)
    } else {
      setResume(pagetwomobile)
      setPageNumber(2)
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
          // flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        {resume ===
        'https://docs.google.com/document/d/e/2PACX-1vQRQd7xAy5G5rNN5bLdTUAxNEk3NmCpa3OPQqyXfOhHnhmHUh8VJSAktmajyoapxoAF6VsCl3B_BuWL/pub?embedded=true' ? (
          <iframe
            scrolling="no"
            frameBorder="none"
            style={{
              width: '50%',
              height: '120rem',
              margin: 'auto',
              overflow: 'hidden',
            }}
            src="https://docs.google.com/document/d/e/2PACX-1vQRQd7xAy5G5rNN5bLdTUAxNEk3NmCpa3OPQqyXfOhHnhmHUh8VJSAktmajyoapxoAF6VsCl3B_BuWL/pub?embedded=true"
          ></iframe>
        ) : (
          <img
            style={{ width: `${matchesMin} ? '45rem' : '15rem'` }}
            src={resume}
            alt="resume"
          />
        )}
      </div>
      <a
        href={`https://docs.google.com/document/d/1IhfCMydMuDxSnAXB4oVpfMR2t2T4JTaLQ-BRhG5kqY4/export?format=pdf`}
        download="VictorSaucedaResume"
        style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <p
          style={{
            display: 'flex',
            margin: 'auto',
            // flexDirection: 'column',
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
        <Button style={{ color: '#75B0BE' }} onClick={goToPrevPage}>
          Prev
        </Button>
        <Button style={{ color: '#75B0BE' }} onClick={goToNextPage}>
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
    </Layout>
  )
}
export default Resume
