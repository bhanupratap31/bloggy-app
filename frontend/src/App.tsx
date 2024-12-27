import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/signup"
import { Blog } from "./pages/Blog"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
