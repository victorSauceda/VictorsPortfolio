/* Vendor imports */
import React, { useState } from 'react'

/* App imports */

import Button from '@mui/material/Button'

import pageone from '../../../src/images/page1.png'
import pagetwo from '../../../src/images/Page2.png'

const Resume = () => {
  const [numPages, setNumPages] = useState(2)
  const [pageNumber, setPageNumber] = useState(1)
  const [resume, setResume] = useState(pageone)
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  const goToPrevPage = () => {
    setResume(pageone)
    setPageNumber(1)
  }
  const goToNextPage = () => {
    setResume(pagetwo)
    setPageNumber(2)
  }
  return (
    <>
      <nav
        style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <Button style={{ color: '#75B0BE' }} onClick={goToPrevPage}>
          Prev
        </Button>
        <Button style={{ color: '#75B0BE' }} onClick={goToNextPage}>
          Next
        </Button>
      </nav>
      <div
        style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <img src={resume} alt="resume" />
      </div>
      <nav
        style={{
          display: 'flex',

          justifyContent: 'center',
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
        }}
      >
        Page {pageNumber} of {numPages}
      </p>
    </>
  )
}
export default Resume
