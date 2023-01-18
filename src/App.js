// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Gallery from './screens/Gallery/Gallery';
import Books from './screens/Books/Books';
import Favorites from './screens/Favorites/Favorites';
import Contacts from './screens/Contacts/Contacts';
import Music from './screens/Music/Music';
import Header from './components/layout/Header';
import NotFound from './screens/NotFound/NotFound';
import './App.css';
import MusicSingle from './components/Music/Single/MusicSingle';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="music" element={<Music />} />
                  <Route path="music/:slug" element={<MusicSingle />} />
                  <Route path="books" element={<Books />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
