import InputCarousel from '../../components/InputCarousel/InputCarousel'

function Create() {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='col-12 col-md-3 align-self-center'>
        <h2>Раунд</h2>
        <InputCarousel />
        <h2>Отдых</h2>
        <InputCarousel />
      </div>
    </div>
  )
}

export default Create
