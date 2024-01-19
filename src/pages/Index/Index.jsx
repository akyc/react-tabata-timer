import { NavLink, useLocation } from 'react-router-dom'
import { path } from '../../utils/constants'
import Slider from '../../components/Slider/Slider'

function Index() {
  const location = useLocation()
  return (
    <>
      <div className='flex-column align-items-center h-100'>
        <Slider />
      </div>
      <div className='button-container text-center position-absolute bottom-0 w-100'>
        <NavLink
          to={path.tabata.url}
          className='btn btn-lg'
        >
          Тренировка
        </NavLink>
      </div>
    </>
  )
}

export default Index
