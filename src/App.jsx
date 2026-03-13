import DemoA from "./components/DemoA"
import Navbar from "./components/Navbar"
// import AddBlog from "./pages/AddBlog"
// import Home from "./pages/Home"
// import {Routes, Route } from 'react-router-dom'
// import ViewBlog from "./pages/ViewBlog"
// import EditBlog from "./pages/EditBlog"
// import Users from "./pages/Users"


function App() {


  return (
    <>
    <Navbar />
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="AddBlog" element={<AddBlog />} />
      <Route path="/blogs/:id" element={<ViewBlog />}/>
      <Route path="/edit/:id" element={<EditBlog />}/>
    </Routes> */}
    {/* <Users /> */}
    <DemoA />
    </>
  )
}

export default App
