import Navbar from "./components/Navbar"
import AddBlog from "./pages/AddBlog"
import Home from "./pages/Home"
import {Routes, Route } from 'react-router-dom'
// import Users from "./pages/Users"
  

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="AddBlog" element={<AddBlog />} />
    </Routes>
    {/* <Users /> */}
    </>
  )
}

export default App
