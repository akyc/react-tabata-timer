import { IosPickerItem } from './IosPickerItem'

function InputCarousel() {
  return (
    <div className='embla'>
      <IosPickerItem
        slideCount={20}
        perspective='left'
        loop={true}
        label=''
      />
      <IosPickerItem
        slideCount={60}
        perspective='left'
        loop={true}
        label='мин'
      />
      <IosPickerItem
        slideCount={60}
        perspective='right'
        loop={true}
        label='с'
      />
    </div>
  )
}

export default InputCarousel
