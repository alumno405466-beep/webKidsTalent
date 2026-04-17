import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../ui/SiteHeader'
import { SiteFooter } from '../ui/SiteFooter'

export function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-svh bg-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-3 pb-10 pt-3 sm:px-4">
        <div className={isHome ? '' : 'animate-[fadeIn_.18s_ease-out]'}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

