import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { path } from '../../utils/constants'

function AppHeader(props) {
  const { pathname } = useLocation()
  return (
    <header className={'fixed-top'}>
      <nav className={'navbar'}>
        <div className='container-fluid'>
          <div className='col-auto'>
            {pathname !== path.index.url && (
              <NavLink
                to='..'
                relative='path'
              >
                <span className='header__user-button'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    viewBox='-2 -2 24 24'
                  >
                    <rect
                      x='-2'
                      y='-2'
                      width='24'
                      height='24'
                      fill='none'
                      stroke='none'
                    />
                    <path
                      fill='white'
                      d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1.828-8l3.535 3.536a1 1 0 0 1-1.414 1.414L6.05 10.707a1 1 0 0 1 0-1.414l4.243-4.243a1 1 0 0 1 1.414 1.414z'
                    />
                  </svg>
                </span>
              </NavLink>
            )}
          </div>
          <div className='col-auto'>
            <NavLink to={path.user.url}>
              <span className='header__user-button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='-2 -2 24 24'
                >
                  <rect
                    x='-2'
                    y='-2'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='none'
                  />
                  <path
                    fill='white'
                    d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2M5.91 16.876a8.033 8.033 0 0 1-1.58-1.232a5.57 5.57 0 0 1 2.204-1.574a1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964a1 1 0 1 1 .712-1.868a5.65 5.65 0 0 1 2.284 1.607a8.032 8.032 0 0 1-1.586 1.225'
                  />
                </svg>
              </span>
            </NavLink>
            <NavLink
              to={path.help.url}
              className={'ms-2'}
            >
              <span className='header__user-button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='-2 -2 24 24'
                >
                  <rect
                    x='-2'
                    y='-2'
                    width='24'
                    height='24'
                    fill='none'
                    stroke='none'
                  />
                  <path
                    fill='white'
                    d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1.276-3.218a1 1 0 0 1-1.232-1.576l.394-.308a1.5 1.5 0 1 0-1.847-2.364l-.394.308a1 1 0 1 1-1.23-1.576l.393-.308a3.5 3.5 0 1 1 4.31 5.516z'
                  />
                </svg>
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default AppHeader
