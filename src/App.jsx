import Dashboard from "./Page/Dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Signup from "./Page/Signup/Signup";
import Login from "./Page/Login/Login";
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blog/:id" element={<ReadMore />} />
          <Route path="/allblogsbyuser/:id" element={<AllBlogs />} />
          <Route path="/editblog/:id" element={<EditBlogPage />} />
          <Route path="/comment/:id" element={<Comment />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App
