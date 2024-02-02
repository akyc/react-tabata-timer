import { nanoid } from 'nanoid'
import { path, sounds } from '../../utils/constants'
import { useEffect, useState } from 'react'
import { secondsToString, stringToSeconds } from '../../utils/helpers'
import { useDispatch } from 'react-redux'
import { addTimer } from '../../store/tabataSlice'
import { useNavigate } from 'react-router-dom'
import Rolldate from 'rolldate-full/src'

function Create() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialState = {
    rounds: 0,
    workTime: secondsToString(0),
    restTime: secondsToString(0),
    short: 'beep',
    long: 'horn',
  }
  const [state, setState] = useState(initialState)
  const soundsList = Object.keys(sounds)
  useEffect(() => {
    document.querySelector('html').dataset.bsTheme = 'dark'
  }, [])
  const onChange = (e) => {
    console.log(e.target.value)
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addTimer({
        id: nanoid(),
        rounds: state.rounds,
        workTime: state.workTime,
        restTime: state.restTime,
        prepareTime: 3,
        sounds: {
          sort: state.short,
          long: state.long,
        },
      })
    )
    navigate(path.tabata_list.url)
  }
  useEffect(() => {
    new Rolldate({
      el: '#workTime',
      format: 'mm:ss',
      lang: {
        title: 'Работа мин:сек',
        cancel: 'Отменить',
        confirm: 'Добавить',
        min: '',
        sec: '',
      },
      value: '0',
      confirm: function (date) {
        setState((prevState) => ({
          ...prevState,
          ['workTime']: date,
        }))
      },
    })
  }, [])

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='col-12 col-md-3 align-self-center'>
        <form onSubmit={onSubmit}>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              required
              autoFocus
              onChange={onChange}
            />
            <label htmlFor='name'>Название</label>
          </div>
          <div className='mb-3 row g-3'>
            <div className='col'>
              <div className='form-floating'>
                <input
                  type='number'
                  className='form-control'
                  id='rounds'
                  name='rounds'
                  onChange={onChange}
                  pattern='\d{1,2}'
                  //value={state.rounds}
                  required
                />
                <label htmlFor='rounds'>Раунды</label>
              </div>
            </div>
            <div className='col'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='workTime'
                  name='workTime'
                  onChange={onChange}
                  pattern='\d{2}:\d{2}'
                  value={state.workTime}
                  required
                />
                <label htmlFor='workTime'>Работа</label>
              </div>
            </div>
            <div className='col'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='restTime'
                  name='restTime'
                  onChange={onChange}
                  pattern='\d{2}:\d{2}'
                  value={state.restTime}
                />
                <label htmlFor='restTime'>Отдых</label>
              </div>
            </div>
          </div>
          <div className='form-floating mb-3'>
            <select
              className='form-select'
              id='select-shortsound'
              value={state.short}
              name='short'
              onChange={onChange}
            >
              {soundsList.map((name, i) => (
                <option
                  value={name}
                  key={i}
                >
                  {name}
                </option>
              ))}
            </select>
            <label htmlFor='select-shortsound'>Короткий сигнал</label>
          </div>
          <div className='form-floating mb-3'>
            <select
              className='form-select'
              id='select-longsound'
              value={state.long}
              name='long'
              onChange={onChange}
            >
              {soundsList.map((name, i) => (
                <option
                  value={name}
                  key={i}
                >
                  {name}
                </option>
              ))}
            </select>
            <label htmlFor='select-longsound'>Длинный сигнал</label>
          </div>
          <button
            type='submit'
            className='btn btn-primary btn-lg rounded-pill px-4'
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create
