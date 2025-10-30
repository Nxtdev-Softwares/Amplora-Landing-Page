import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'
import './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/styles/HomeStyles.css'
import './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/styles/WaitListFormPage.css'
import './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/styles/NavBar.css'
import './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/styles/FooterStyles.css'
import './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/styles/PoliciesTermsStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
