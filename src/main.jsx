import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'
import './styles/HomeStyles.css'
import './styles/WaitListFormPage.css'
import './styles/NavBar.css'
import './styles/FooterStyles.css'
import './styles/PoliciesTermsStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
