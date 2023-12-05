import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { MdWorkspaces } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { FiSettings } from 'react-icons/fi'

const MasterLayout = props => {
  return (
    <div className="master-container">
      <Navigation />
      <div className="sidebar z-50">
        <ul className="sidebar-links rounded-xl">
          {/* <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/'}>
              <div>
                <BiHomeSmile className="text-2xl link-icon transition-all " />
              </div>
              <span className="text-xs link-text transition-all ">Home</span>
            </Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/teams'}>Teams</Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/calender'}>Calender</Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/settings'}>Settings</Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/user'}>User</Link>
          </li> */}
          {items.map((item, idx) => {
            const { title, href, Icon } = item
            return (
              <li key={title}>
                {/* <a
                      onClick={toggleSidebar}
                      href={href}
                      className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50"
                    > */}
                <Link
                  className="link flex border-r-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-r-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50 hover:rounded-xl"
                  to={href}
                >
                  <div>
                    <Icon className="text-2xl link-icon transition-all " />
                  </div>
                  <span className="text-xs link-text transition-all ">
                    {title}
                  </span>
                </Link>
                {/* </a> */}
              </li>
            )
          })}
        </ul>
        <div className="main-content">{props.children}</div>
      </div>
    </div>
  )
}

const items = [
  { title: 'Home', Icon: BiHomeSmile, href: '' },
  { title: 'Teams', Icon: MdWorkspaces, href: '/teams' },
  { title: 'Calender', Icon: SlCalender, href: '/calender' },
  { title: 'Settings', Icon: FiSettings, href: '/settings' },
  { title: 'Profile', Icon: BiUser, href: '/profile' },
  //   { title: 'Shop', Icon: FiShoppingCart, href: '' },
]

export default MasterLayout
