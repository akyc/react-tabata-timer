import { useLocation } from 'react-router-dom'
import { path } from '../../utils/constants'

function Meta({ element }) {
  const { pathname } = useLocation()
  const metadata = Object.values(path).find((page) => page.url === pathname)

  if (metadata) {
    document.title = metadata.title
    document.querySelector('meta[name="description"]').setAttribute('content', metadata.description)
  }
  return element
}

export default Meta
