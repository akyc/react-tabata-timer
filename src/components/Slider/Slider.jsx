function Slider() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <img
        className='img-fluid'
        src={'./img/slider/' + Math.floor(Math.random() * 8) + '.jpg'}
        alt='Tabata-timer.ru'
        style={{ filter: 'grayscale(1)', borderRadius: '25px' }}
      />
    </div>
  )
}

export default Slider
