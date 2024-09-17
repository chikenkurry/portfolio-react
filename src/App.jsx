import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./layout/Navbar";
function App() {
  

  return (
    <Router basename="/portfolio-react">
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />  
          <Homepage />
          </>} />

      </Routes>
    </Router>
  )
}

export default App
