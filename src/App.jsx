import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Partner from './pages/Partner.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import StateFAQ from './pages/StateFAQ.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq/alabama" element={<StateFAQ />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Route>
    </Routes>
  )
}
