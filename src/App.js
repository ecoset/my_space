import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchLayout from './layout/SearchLayout';
import Home from './components/Home/Home';
import MusicArtists from './components/Music/Artists/MusicArtists';
import Music from './components/Music/Music';
import MusicNewReleases from './components/Music/New/Releases/MusicNewReleases';
import MusicVA from './components/Music/VA/MusicVA';
import AreaSingl from './components/UI/Area/Singl/AreaSingl';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SearchLayout />}>
                        <Route index element={<Home />} />
                        <Route path='music' element={<Music />} />
                        <Route path='music/:slug' element={<AreaSingl />} />
                        <Route path='music/new' element={<MusicNewReleases />} />
                        <Route path='music/va' element={<MusicVA />} />
                        <Route path='music/artists' element={<MusicArtists />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
