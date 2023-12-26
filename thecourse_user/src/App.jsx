import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Course from "./pages/Course"
import ContactUser from "./pages/ContactUser"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<ContactUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
