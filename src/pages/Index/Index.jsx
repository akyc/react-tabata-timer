import { NavLink, useLocation } from 'react-router-dom'
import { path } from '../../utils/constants'
import Slider from '../../components/Slider/Slider'

function Index() {
  const location = useLocation()
  return (
    <div className='flex-column align-items-center container'>
      <div className='row'>
        <div className='col-12'>
          <Slider />
          <div className='button-container py-3 text-center'>
            <NavLink
              to={path.tabata.url}
              className='btn btn-outline-light btn-lg'
            >
              Тренировка
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
