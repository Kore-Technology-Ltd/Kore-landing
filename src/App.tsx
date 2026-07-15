import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KoreLandingPage from './KoreLandingPage'
import PrivacyPage from './privacy-page'
import TermsPage from './terms-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KoreLandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
