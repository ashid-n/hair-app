import Dashboard from "./Page/Dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blog/:id" element={<ReadMore />} />
          <Route path="/allblogsbyuser/:id" element={<AllBlogs />} />
          <Route path="/editblog/:id" element={<EditBlogPage />} />
          <Route path="/comment/:id" element={<Comment />} /> */}
        </Routes>
      </Router>
    </>
  )
}
export default App
