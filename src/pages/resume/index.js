/* Vendor imports */
import React, { useEffect, useState } from 'react'

/* App imports */
import SEO from '../../components/seo'
import Button from '@mui/material/Button'
import Layout from '../../components/layout'
import pageone from '../../../src/images/page1.png'
import pageonemobile from '../../../src/images/page1mobile.png'
import pagetwo from '../../../src/images/Page2.png'
import pagetwomobile from '../../../src/images/Page2mobile.png'

import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
const Resume = () => {
  const [numPages, setNumPages] = useState(2)
  const [pageNumber, setPageNumber] = useState(1)
  const [resume, setResume] = useState(pageone)
  const matchesMin = useMediaQuery('(min-width:1275px)')
  useEffect(() => {
    if (matchesMin) {
      setResume(pageone)
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
        {resume === '../../../src/images/page1.png' ? (
          <img style={{ width: '45rem' }} src={resume} alt="resume" />
        ) : (
          <img
            style={{ width: `${matchesMin} ? '45rem' : '25rem'` }}
            src={resume}
            alt="resume"
          />
        )}
      </div>
      <a
        href={`https://docs.google.com/document/d/1-BKOQkCpyRVgMvXhmxBA49Bch_c-ts4P59PZ-m_0hsE/export?format=pdf`}
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
              // flexDirection: 'column',
              // justifyContent: 'center',
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
