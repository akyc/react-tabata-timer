import React, { useState } from 'react'
import { selectTabata } from '../../store/tabataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { secondsToString, stringToSeconds } from '../../utils/helpers'
import { path, sounds } from '../../utils/constants'

function Start() {
  const params = useParams()
  const navigate = useNavigate()
  const timers = useSelector(selectTabata)
  const { name, rounds, workTime, restTime, prepareTime } = timers.filter((el) => el.id === params.id)[0]
  const [countDown, setCountDown] = useState(null)
  const [round, setRound] = useState(null)
  const [timerType, setTimerType] = useState()
  const [currentLength, setCurrentLength] = useState(0)
  const currents = {
    'Подготовка': prepareTime,
    'Работа': stringToSeconds(workTime),
    'Отдых': stringToSeconds(restTime),
  }

  function roundTimer(time, type) {
    setCurrentLength(currents[type])
    setTimerType(type)
    return new Promise((resolve) => {
      let counter = setInterval(() => {
        time = time - 1
        if (time < 0) {
          clearInterval(counter)
          resolve()
          return
        }
        if (time === 1 || time === 2) {
          //playSound('beep')
          s.beep.play()
          s.beep.currentTime = 0
        }
        if (time === 0) {
          //playSound('gorn')
          s.horn.play()
          s.horn.currentTime = 0
        }
        setCountDown(time)
      }, 1000)
    })
  }

  let s = {}
  async function handleSubmit(e) {
    e.preventDefault()
    s.beep = new Audio(sounds.beep)
    let playPromise = s.beep.play()
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          s.beep.pause()
          s.beep.currentTime = 0
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    s.horn = new Audio(sounds.horn)
    playPromise = s.horn.play()
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          s.horn.pause()
          s.horn.currentTime = 0
        })
        .catch((error) => {
          console.log(error.message)
        })
    }

    let array = [...Array(rounds).keys()]
    for (let item of array) {
      setRound(`${item + 1}/${rounds}`)
      if (item === 0) {
        await roundTimer(prepareTime, 'Подготовка')
      }
      await roundTimer(stringToSeconds(workTime), 'Работа')
      await roundTimer(stringToSeconds(restTime), 'Отдых')
    }
  }
  return (
    <div className='container-fluid h-100'>
      <div className='row d-flex align-items-center justify-content-center h-100'>
        <div className='col-12 col-md-3 align-self-center'>
          <small className='text-center d-block mb-3'>{name}</small>
          <h2 className='text-center'>{round && `Раунд: ${round}`}</h2>
          <div className='text-center position-relative'>
            {round && (
              <svg
                width='300'
                height='300'
                style={{ transition: 'all 0.7s ease-in-out' }}
              >
                <circle
                  r='90'
                  cx='150'
                  cy='150'
                  fill='transparent'
                  stroke='#111630'
                  strokeWidth='2rem'
                  strokeDasharray='565.486677646162783'
                  strokeDashoffset='0'
                ></circle>
                <circle
                  r='90'
                  cx='150'
                  cy='150'
                  style={{
                    transition: 'all 0.7s ease-in-out',
                    transformOrigin: '50% 50%',
                    transform: 'rotate(-90deg)',
                  }}
                  fill='transparent'
                  strokeLinecap='round'
                  stroke={timerType === 'Работа' ? 'red' : 'green'}
                  strokeWidth='2rem'
                  strokeDasharray='565.486677646162783'
                  strokeDashoffset={
                    currentLength && countDown
                      ? 565.486677646162783 - (565.486677646162783 / currentLength) * (currentLength - countDown)
                      : 0
                  }
                ></circle>
              </svg>
            )}
            <div
              className='position-absolute'
              style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            >
              <span className='fs-1'>{countDown !== null && `${secondsToString(countDown)}`}</span>
              <br />
              <small>{timerType && timerType}</small>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='d-grid gap-2'>
              {countDown !== null ? (
                <button
                  type='cancel'
                  onClick={() => navigate(path.tabata_list.url)}
                  className='btn btn-danger btn-lg'
                >
                  Стоп
                </button>
              ) : (
                <button
                  type='submit'
                  className='btn btn-success btn-lg'
                >
                  Старт
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Start
