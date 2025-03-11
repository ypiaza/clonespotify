import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artists from "./components/Artists";
import Songs from "./components/Songs";
import ArtistPage from "./components/ArtistPage";
import PlayerSong from "./components/PlayerSong";

function App() {
  return (
    <div className="bg-zinc-900 h[100vh]">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/artistPage/:id" element={<ArtistPage />} />
          <Route path="/playerSong/:name" element={<PlayerSong />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
