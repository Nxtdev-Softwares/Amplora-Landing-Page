import { BrowserRouter, Routes, Route } from "react-router-dom"
import Amplora from './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/pages/Amplora.jsx'
import WaitListForm from './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/WaitListForm.jsx'
import AmploraPrivacyPolicy from './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/pages/AmploraPrivacyPolicy.jsx'
import TermsServices from './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/pages/TermsServices.jsx'
// import FounderTerms from './pages/LandingPages/ProductDevelopedWithPartners/NXTDEV/pages/Amplora/pages/FounderTerms.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Amplora/>}></Route>
        <Route path="/WaitListForm" element={<WaitListForm/>}></Route>
        <Route path="/AmploraPrivacyPolicy" element={<AmploraPrivacyPolicy/>}></Route>
        <Route path="/TermsServices" element={<TermsServices/>}></Route>
        {/* <Route path="/FounderTerms" element={<FounderTerms/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
