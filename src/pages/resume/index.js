/* Vendor imports */
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from './index.module.less'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import resume from './resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
export const learnmorePropTypes = {
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

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  const goToPrevPage = () => {
    if (pageNumber > 1 && pageNumber <= 2) {
      setPageNumber(pageNumber - 1)
    }
  }
  const goToNextPage = () => {
    if (pageNumber > 0 && pageNumber < 2) {
      setPageNumber(pageNumber + 1)
    }
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
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
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
