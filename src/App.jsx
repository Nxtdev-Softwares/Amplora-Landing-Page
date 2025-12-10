import { BrowserRouter, Routes, Route } from "react-router-dom"
import Amplora from './pages/Amplora.jsx'
import WaitListForm from './pages/WaitListForm.jsx'
import UpfrontPaymentPage from './pages/UpfrontPaymentPage.jsx'
import AmploraPrivacyPolicy from './pages/AmploraPrivacyPolicy.jsx'
import TermsServices from './pages/TermsServices.jsx'
// import FounderTerms from './pages/FounderTerms.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Amplora/>}></Route>
        <Route path="/WaitListForm" element={<WaitListForm/>}></Route>
        <Route path="/UpfrontPaymentPage" element={<UpfrontPaymentPage/>}></Route>
        <Route path="/AmploraPrivacyPolicy" element={<AmploraPrivacyPolicy/>}></Route>
        <Route path="/TermsServices" element={<TermsServices/>}></Route>
        {/* <Route path="/FounderTerms" element={<FounderTerms/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
