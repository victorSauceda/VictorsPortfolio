/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'

/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import newfreedom from '../../../src/images/newfreedom.png'
import youth from '../../../src/images/youth.png'
import defytheodds from '../../../src/images/defytheodds.png'
import worlds from '../../../src/images/worlds.png'
import family from '../../../src/images/family.png'
import voting from '../../../src/images/voting.png'
import story from '../../../src/images/story.png'
import power from '../../../src/images/power.png'
import cohort from '../../../src/images/cohort.png'
import linkedin from '../../../src/images/linkedin.png'
import resourcefair from '../../../src/images/resourcefair.png'
import style from './index.module.less'
export const articles = [
  {
    name: 'Release of ThriveSBC & resource fair at UCSB',
    date: 'November 2021',
    description:
      'Officially launched Thrive SBC to the Santa Barbara County community. Great to be able to finally release the application after working on this purpose project for over a year. With over 70 people in attendance at this event it was great to see the community of support',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_codeforamerica-thrivesbc-resourcefair-activity-6865179777792385024-dVSC',
    pic: resourcefair,
  },
  {
    name: 'Presenting a LinkedIn workshop',
    date: 'August 2021',
    description:
      'I was able to share my industry insights into the LinkedIn platform. I have been able to leverage my insights and strategies into an effective LinkedIn page and raise awareness around individual digital footprints',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_defytheodds-defyventures-defywa-activity-6820072328098136064-XeOr',
    pic: linkedin,
  },

  {
    name: 'Kicking off our first CEO-YNL',
    date: 'June 2021',
    description:
      'Excited to start our first Defy Ventures CEO-YNL Community entrepreneurial training program. Great to see this come to fruition. I am the co-facilitator of the program and truly believe in the work that Defy is doing. Happy to be able to volunteer my time towards this purposeful cause. ',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_defytheodds-defyventures-defywa-activity-6820072328098136064-XeOr',
    pic: cohort,
  },
  {
    name: 'The power of lived experience',
    date: 'April 2021',
    description:
      'I wrote an article at Code for America. In this piece I share my insights on why technology should be developed with lived experience in mind. I also shared some of the resilience that was embodied in my journey into tech.',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_the-power-of-lived-experience-code-for-activity-6792890252718682112-6s1H',
    pic: power,
  },
  {
    name: 'Influencing our youth',
    date: 'March 2021',
    description:
      'I have been privileged to be able to share my story at some our Washington state juvenile facilities. I was thrilled when I was offered an opportunity to teach an intro to coding course to the youth. This was a very special moment for me.',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_community-youth-justicereform-activity-6778416983173083136-rxhK',
    pic: story,
  },
  {
    name: 'Advocating for voting rights',
    date: 'December 2020',
    description:
      'I was featured in AP news for my involvement in restoring voting rights in Washington. This was a great opportunity to utilize my voice to have a significant impact in our society',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_momentum-builds-for-letting-people-vote-while-activity-6743342251658874880-KczE',
    pic: voting,
  },
  {
    name: 'Reconnecting with family',
    date: 'November 2020',
    description:
      'Had a chance to visit my family down in California for thanksgiving after not being able to see them in 10 years.',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_santabarbara-codeforamerica-2020fellows-activity-6739402752562204672-Hiod',
    pic: family,
  },
  {
    name: 'How both of my worlds collided',
    date: 'November 2020',
    description:
      'I wrote an article that shares my journey into my first software engineer role at Code for America. It was exciting to see all those years of hard work pay off.',
    link:
      'https://www.linkedin.com/pulse/how-both-my-worlds-collided-victor-sauceda/›',
    pic: worlds,
  },

  {
    name: 'Defy the Odds Episode',
    date: 'December 2019',
    description:
      'How to turn an obstacle into an opportunity. This video was taken immediately after an F3 work out. Listen to how I turn a obstacle into an opportunity ',
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_defytheodds-prisonerreentry-leonovsky-activity-6717125462205853696-wgQW',
    pic: defytheodds,
  },
  {
    name: 'Volunteering at Re-Route',
    date: 'Nov 2019',
    description: `Enjoying the day with some of our youth from the Re-Route program. Had a chance to share my story with this amazing group of kids. Was able to grab so much inspiration from them. Our youth is our future. It seems like yesterday I was in some of their shoes. Time fly's by. Want to make it a point to impact and influence the young ones that are coming up.Special shout out to David Lujano for making this all possible. Much love.`,
    link:
      'https://www.linkedin.com/posts/victor-sauceda-10202a190_enjoying-the-day-with-some-of-our-youth-from-activity-6631603302691938304-CGX_',
    pic: youth,
  },
  {
    name: 'New Freedom',
    date: 'October 2019',
    description:
      'This is a video on Youtube directed and edited by LaSean Smith. In this video I share some of my life altering experiences in which helped shaped the person I am today',
    link: 'https://youtu.be/DCfkUHgJ9Hk',
    pic: newfreedom,
  },
]

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

class Learnmore extends React.Component {
  static propTypes = learnmorePropTypes

  render() {
    return (
      <Layout>
        <SEO
          title="Learn More"
          description="Want to learn more about me, keep reading..."
          path="learnmore"
        />
        <div>
          <div>
            <h1>Take a look at some of the other things I am involved in</h1>
            <Grid
              container
              // className={style.cards}
              sx={{
                justifyContent: 'center',
                // width: '60%',
                margin: 'auto',
              }}
            >
              {articles.map(item => {
                const { name, date, description, link, pic } = item
                return (
                  <Grid
                    item
                    sm={12}
                    md={4}
                    lg={3}
                    style={{
                      margin: '1rem 1rem',
                    }}
                  >
                    <Card
                      className={style.cards}
                      // style={{
                      //   height: '35rem',
                      //   textAlign: 'center',
                      // }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: '#75B0BE' }}
                            aria-label="recipe"
                          >
                            VS
                          </Avatar>
                        }
                        title={name}
                        subheader={date}
                      />
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                          component="img"
                          height="270"
                          image={pic}
                          alt={`Image of ${name}`}
                        />
                      </a>
                      <CardContent style={{ textAlign: 'center' }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{ padding: '1rem' }}
                        >
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Learnmore
