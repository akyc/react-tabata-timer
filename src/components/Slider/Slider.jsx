import Slides from './Slides'
function Slider() {
  const rows = Array.from({ length: 2 })
  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      {rows.map((row, i) => {
        return (
          <div
            className={`slider-outer ${row}`}
            key={i}
          >
            <Slides num={i} />
          </div>
        )
      })}
      {/*<div className={'slider-outer justify-content-end'}>*/}
      {/*  <Swiper*/}
      {/*    direction={'vertical'}*/}
      {/*    loop={true}*/}
      {/*    spaceBetween={15}*/}
      {/*    slidesPerView={2}*/}
      {/*    autoplay={{*/}
      {/*      delay: 1,*/}
      {/*      disableOnInteraction: false,*/}
      {/*    }}*/}
      {/*    freeMode={true}*/}
      {/*    modules={[FreeMode, Autoplay]}*/}
      {/*    speed={7000}*/}
      {/*    className='sample-slider'*/}
      {/*  >*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/1.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/2.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*  </Swiper>*/}
      {/*</div>*/}
      {/*<div className={'slider-outer'}>*/}
      {/*  <Swiper*/}
      {/*    direction={'vertical'}*/}
      {/*    loop={true}*/}
      {/*    spaceBetween={10}*/}
      {/*    slidesPerView={3}*/}
      {/*    autoplay={{*/}
      {/*      delay: 1,*/}
      {/*      disableOnInteraction: false,*/}
      {/*    }}*/}
      {/*    freeMode={true}*/}
      {/*    modules={[FreeMode, Autoplay]}*/}
      {/*    speed={7000}*/}
      {/*    className='sample-slider'*/}
      {/*  >*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/1.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/2.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <img*/}
      {/*        src='./img/slider/3.jpg'*/}
      {/*        className={'img-fluid'}*/}
      {/*      />*/}
      {/*    </SwiperSlide>*/}
      {/*  </Swiper>*/}
      {/*</div>*/}

      {/*<img*/}
      {/*  className='img-fluid'*/}
      {/*  src={'./img/slider/' + Math.floor(Math.random() * 8) + '.jpg'}*/}
      {/*  alt='Tabata-timer.ru'*/}
      {/*  style={{ filter: 'grayscale(1)', borderRadius: '25px' }}*/}
      {/*/>*/}
    </div>
  )
}

export default Slider
