import { nanoid } from 'nanoid'
import { sounds } from '../../utils/constants'
import { useEffect, useState } from 'react'

function Create() {
  const [state, setState] = useState({ id: nanoid(), short: 'beep', long: 'horn' })
  const soundsList = Object.keys(sounds)
  useEffect(() => {
    document.querySelector('html').dataset.bsTheme = 'dark'
  }, [])
  const onChange = (e) => {
    setState((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }
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
              onChange={onChange}
            />
            <label htmlFor='name'>Название</label>
          </div>
          <div className='mb-3 row g-3'>
            <div className='col'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='rounds'
                  name='rounds'
                  onChange={onChange}
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
                />
                <label htmlFor='workTime'>Тренировка</label>
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

          <div className='mb-3'></div>
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
