import Navbar from "./component/navbar/navbar"
import Home from "./component/homePage/home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 Travigo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

