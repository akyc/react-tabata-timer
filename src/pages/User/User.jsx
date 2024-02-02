import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/userSlice'

function User() {
  const { name, secondName, email, phone } = useSelector(selectUser)
  const onChange = (e) => {
    console.log(e.target.name)
  }
  return (
    <div className='container-fluid h-100'>
      <div className='row d-flex justify-content-center h-100'>
        <div className='col-12 col-md-3'>
          <h2 className={'d-flex justify-content-between mb-3'}>
            <span>Настройки</span>
          </h2>
          <p>Временно настройки пользователя не&nbsp;доступны.</p>
          <form>
            <fieldset disabled>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  required
                  autoFocus
                  onChange={onChange}
                  value={name}
                />
                <label htmlFor='name'>Имя</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='secondName'
                  name='secondName'
                  required
                  onChange={onChange}
                  value={secondName}
                />
                <label htmlFor='secondName'>Фамилия</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='email'
                  required
                  onChange={onChange}
                  value={email}
                />
                <label htmlFor='email'>E-mail</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='phone'
                  name='phone'
                  onChange={onChange}
                  value={phone}
                />
                <label htmlFor='phone'>Телефон</label>
              </div>
              <button
                type='submit'
                className='btn btn-primary btn-lg rounded-pill px-4'
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
