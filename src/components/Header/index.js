import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
            <ul className="nav-bar-mobile-icons-container mt-3">
              <Link to="/">
                <li>
                  <AiFillHome className="nav-item-mobile-link" />
                </li>
              </Link>
              <Link to="/jobs">
                <li>
                  <BsFillBriefcaseFill className="nav-item-mobile-link" />
                </li>
              </Link>
              <li>
                <button
                  type="button"
                  className="nav-mobile-btn"
                  onClick={onClickLogout}
                >
                  <FiLogOut />
                </button>
              </li>
            </ul>
          </div>
          <div className="nav-bar-large-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
            <ul className="nav-menu">
              <Link to="/">
                <li className="nav-menu-item mr-3">Home</li>
              </Link>

              <Link to="/jobs">
                <li className="nav-menu-item ml-1">Jobs</li>
              </Link>
            </ul>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
export default withRouter(Header)
