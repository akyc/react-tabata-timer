import slide_1 from '../../img/slider/1.jpg'
import slide_2 from '../../img/slider/2.jpg'
import slide_3 from '../../img/slider/3.jpg'
import slide_4 from '../../img/slider/4.jpg'
import slide_5 from '../../img/slider/5.jpg'
import slide_6 from '../../img/slider/6.jpg'
import slide_7 from '../../img/slider/7.jpg'
import slide_8 from '../../img/slider/8.jpg'

function Slider() {
  const slides = [slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7, slide_8]
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <img
        className='img-fluid'
        src={slides[parseInt(Math.random() * slides.length)]}
        alt='Tabata-timer.ru'
        style={{ 'filter': 'grayscale(1)' }}
      />
    </div>
  )
}

export default Slider
