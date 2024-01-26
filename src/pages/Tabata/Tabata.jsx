import React from 'react'
import { selectTabata } from '../../store/tabataSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { path } from '../../utils/constants'

function Tabata() {
  const timers = useSelector(selectTabata)

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='col-12 col-md-3 align-self-center'>
        <h2 className={'d-flex justify-content-between mb-3'}>
          <span>Таймеры</span>
          <Link
            to={path.tabata_create.url}
            className='btn ms-auto'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='-2 -2 24 24'
            >
              <path
                fill='white'
                d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2z'
              />
            </svg>
          </Link>
        </h2>

        {timers &&
          timers.map(({ id, name, rounds, workTime, restTime, removable }, i) => {
            return (
              <div
                className='border rounded p-3 mb-2 timer'
                key={i}
              >
                <div className='row'>
                  <div className='col-10 pb-2 timer_name'>{name}</div>
                  <div className='col-2 d-flex align-items-start justify-content-end'>
                    <button className='btn p-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='-5 -2 24 24'
                      >
                        <path
                          fill='#666'
                          d='M12 10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0zm-5 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-7V5a3 3 0 1 0-6 0v5z'
                        />
                      </svg>
                    </button>
                  </div>
                  <div className='col-8'>
                    <small className='text-white-50 timer_info-title'>Раунды: Работа / Отдых</small>
                    <br />
                    <span className='timer_info'>
                      {rounds} <span className='separator'>:</span> {workTime} <span className='separator'>/</span>{' '}
                      {restTime}
                    </span>
                  </div>
                  <div className='col-4 d-flex align-items-end justify-content-end'>
                    <Link
                      className={'text-white'}
                      to={`${path.tabata_list.url}/${id}`}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='-2 -2 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m4.126-6.254l-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.201 2.201 0 0 1 7 12.898V7.102C7 5.942 7.883 5 8.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2.042 2.042 0 0 1-.54.575M8.972 7.102v5.796L13.027 10z'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Tabata
