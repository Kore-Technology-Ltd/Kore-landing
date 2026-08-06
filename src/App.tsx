import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Privacy from '@/pages/Privacy.tsx'
import Terms from '@/pages/Terms.tsx'
import Team from '@/pages/team.tsx'
import { AnalyticsProvider } from '@/analytics/AnalyticsProvider'
import { AnalyticsErrorBoundary } from '@/analytics/ErrorBoundary'

/** Scrolls the window to the top on every navigation. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <AnalyticsErrorBoundary>
      <BrowserRouter>
        <AnalyticsProvider>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/privacy"
              element={
                <Layout>
                  <Privacy />
                </Layout>
              }
            />
            <Route
              path="/terms"
              element={
                <Layout>
                  <Terms />
                </Layout>
              }
            />
            <Route
              path="/team"
              element={
                <Layout>
                  <Team />
                </Layout>
              }
            />
          </Routes>
        </AnalyticsProvider>
      </BrowserRouter>
    </AnalyticsErrorBoundary>
  )
}

export default App
