import AppHeader from '../AppHeader/AppHeader'

function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  )
}

export default Layout
