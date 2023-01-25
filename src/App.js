import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MusicArtists from './components/Music/Artists/MusicArtists';
import Music from './components/Music/Music';
import MusicNew from './components/Music/New/MusicNew';
import MusicVA from './components/Music/VA/MusicVA';
import MainLayout from './layout/MainLayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="music" element={<Music />} />
                </Route>
              </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
