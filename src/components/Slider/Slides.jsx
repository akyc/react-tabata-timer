import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { shuffle } from '../../utils/helpers'
import { FreeMode, Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/autoplay/autoplay.scss'
import 'swiper/modules/free-mode/free-mode.scss'

function Slides({ num }) {
  const images = shuffle(Array.from(Array(32).keys()))
  return (
    <Swiper
      direction={'vertical'}
      loop={true}
      spaceBetween={15}
      slidesPerView={3}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      freeMode={true}
      modules={[FreeMode, Autoplay]}
      speed={7000}
      slidesOffsetBefore={num % 2 ? 100 : 0}
      className={`sample-slider ${num % 2 ? 'ms-2' : 'me-2'}`}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              src={`./img/slider/${image}.jpg`}
              className={'img-fluid'}
              alt='спортивные тренировки'
              style={{ filter: 'grayscale(1)', borderRadius: '25px' }}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slides
