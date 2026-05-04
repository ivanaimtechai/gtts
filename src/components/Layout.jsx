import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './TopBar.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
