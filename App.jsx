import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Analytics from './components/Analytics'
import HomePage from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import Blog from './pages/Blog'
import PinterestHub from './pages/PinterestHub'
import About from './pages/About'
import Contact from './pages/Contact'
import AffiliateDisclosure from './pages/AffiliateDisclosure'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import './App.css'

function App() {
  return (
    <>
      <Analytics />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pinterest" element={<PinterestHub />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

