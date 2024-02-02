import React, { useState } from 'react'
import { selectTabata } from '../../store/tabataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectSound } from '../../store/userSlice'

function Tabata() {
  const defaultSettings = useSelector(selectTabata)
  const dispatch = useDispatch()

  const [roundsAmount, setRoundsAmount] = useState(defaultSettings.rounds)
  const [roundsLength, setRoundsLength] = useState(defaultSettings.workTime)
  const [restLength, setRestLength] = useState(defaultSettings.restTime)
  const [countDown, setCountDown] = useState()
  const [round, setRound] = useState(null)
  const [timerType, setTimerType] = useState()
  const [currentLength, setCurrentLength] = useState(0)
  const currents = {
    'Подготовка': 3,
    'Работа': timeConverter(roundsLength),
    'Отдых': timeConverter(restLength),
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
          s.gorn.play()
          s.gorn.currentTime = 0
        }
        setCountDown(time)
      }, 1000)
    })
  }
  function timeConverter(time) {
    let [h, m, s] = time.split(':').map((el) => parseInt(el))
    return h * 60 * 60 + m * 60 + s
  }
  function playSound(type) {
    const sounds = useSelector(selectSound)
    //     {
    //   beep: './mp3/beep.mp3',
    //   gorn: './mp3/gorn.mp3',
    // }
    const audio = new Audio(sounds[type])
    audio.play()
    return new Promise((resolve) => {
      audio.onended = () => {
        resolve()
      }
    })
  }
  let s = {}
  async function handleSubmit(e) {
    e.preventDefault()
    s.beep = new Audio('./mp3/beep.mp3')
    s.beep.play()
    s.beep.pause()
    s.beep.currentTime = 0

    s.gorn = new Audio('./mp3/gorn.mp3')
    s.gorn.play()
    s.gorn.pause()
    s.gorn.currentTime = 0

    let array = [...Array(roundsAmount).keys()]
    for (let item of array) {
      setRound(`${item + 1}/${roundsAmount}`)
      if (item === 0) {
        await roundTimer(3, 'Подготовка')
      }
      await roundTimer(timeConverter(roundsLength), 'Работа')
      await roundTimer(timeConverter(restLength), 'Отдых')
    }
  }
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='col-12 col-md-3 align-self-center'>
        <p className='text-center'>{round && `Раунд: ${round}`}</p>
        <div className='text-center position-relative'>
          <svg
            width='200'
            height='200'
            style={{ transition: 'all 0.7s ease-in-out' }}
          >
            <circle
              r='70'
              cx='100'
              cy='100'
              fill='transparent'
              stroke='lightgrey'
              strokeWidth='2rem'
              strokeDasharray='439.8'
              strokeDashoffset='0'
            ></circle>
            <circle
              r='70'
              cx='100'
              cy='100'
              style={{
                transition: 'all 0.7s ease-in-out',
                transformOrigin: '50% 50%',
                transform: 'rotate(-90deg)',
              }}
              fill='transparent'
              strokeLinecap='round'
              stroke={timerType === 'Работа' ? 'red' : 'green'}
              strokeWidth='2rem'
              strokeDasharray='439.8'
              strokeDashoffset={
                currentLength && countDown ? 439.8 - (439.8 / currentLength) * (currentLength - countDown) : 0
              }
            ></circle>
          </svg>
          <div
            className='position-absolute'
            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
          >
            <span className='fs-1'>{countDown && `${countDown}`}</span>
            <br />
            <small>{timerType && timerType}</small>
          </div>
        </div>
        <form
          action=''
          onSubmit={handleSubmit}
        >
          <div className='mb-3'>
            <label
              htmlFor='rounds_amount'
              className='form-label'
            >
              Число раундов
            </label>
            <input
              type='number'
              name='rounds_amount'
              onChange={(e) => setRoundsAmount(parseInt(e.target.value))}
              value={roundsAmount}
              className='form-control'
              step='1'
              min='1'
              pattern='[0-9]{2}'
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='rounds_length'
              className='form-label'
            >
              Время раунда
            </label>
            <input
              type='text'
              name='rounds_length'
              className='form-control'
              value={roundsLength}
              onChange={(e) => setRoundsLength(e.target.value)}
              step='1'
              pattern='[0-9]{2}:[0-9]{2}:[0-9]{2}'
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='reast_length'
              className='form-label'
            >
              Время отдыха
            </label>
            <input
              type='text'
              name='rest_length'
              className='form-control'
              value={restLength}
              onChange={(e) => setRestLength(e.target.value)}
              step='1'
              pattern='[0-9]{2}:[0-9]{2}:[0-9]{2}'
            />
          </div>
          <div className='d-grid gap-2'>
            {countDown ? (
              <button
                type='cancel'
                onClick={() => location.reload()}
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
  )
}

export default Tabata
