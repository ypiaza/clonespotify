import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artists from "./components/Artists";

function App() {
  return (
    <div className="bg-zinc-900 h[100vh]">
      <Header />
      <Main />
      <Router>
        <Routes>
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
