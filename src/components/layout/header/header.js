/* Vendor imports */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaCalendar,
} from 'react-icons/fa'
/* App imports */
import style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      lastScrollY: 0,
      fixedHeader: false,
      collapsedMenu: true,
    }
    this.toggleFixedHeader = this.toggleFixedHeader.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleFixedHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleFixedHeader)
  }
  toggleFixedHeader() {
    if (!this.toggleFixedHeader.animationInProgress) {
      this.toggleFixedHeader.animationInProgress = true
      setTimeout(() => {
        this.setState(
          {
            lastScrollY: window.scrollY,
            fixedHeader:
              window.scrollY > 100 && this.state.lastScrollY < window.scrollY,
          },
          () => (this.toggleFixedHeader.animationInProgress = false)
        )
      }, 200)
    }
  }

  toggleMenu() {
    this.setState({
      collapsedMenu: !this.state.collapsedMenu,
    })
  }

  render = () => (
    <div
      className={style.container}
      style={this.state.fixedHeader ? { backgroundImage: 'none' } : null}
    >
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={Utils.resolvePageUrl(Config.pages.home)}>
            <h4>{Config.siteTitle}</h4>
            <p
              className={
                this.state.fixedHeader
                  ? style.hiddenDescription
                  : style.visibleDescription
              }
            >
              {Config.siteDescription}
            </p>
          </Link>
        </div>
        <div className={style.menuButton}>
          {this.state.collapsedMenu ? (
            <FaBars size="30" onClick={this.toggleMenu} />
          ) : (
            <FaTimes size="30" onClick={this.toggleMenu} />
          )}
        </div>
      </div>
      <div
        className={[
          style.list,
          this.state.collapsedMenu ? style.collapsedMenu : style.expandedMenu,
        ].join(' ')}
      >
        <ul style={{ padding: '1rem', fontSize: '1rem', zIndex: '30' }}>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.home)}>Home</Link>
          </li>
          {/* <li>
            <Link to={Utils.resolvePageUrl(Config.pages.tag)}>Tags</Link>
          </li> */}
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li style={{ whiteSpace: 'nowrap' }}>
            <Link to={'/learnmore'}>Learn more</Link>
          </li>
          <li>
            <Link to={'/resume'}>Resume</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              rel="nofollow noopener noreferrer"
              href={Config.social.linkedin}
            >
              <FaLinkedin size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Config.social.calendly}
            >
              <FaCalendar size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Config.social.github}
            >
              <FaGithub size="30" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
