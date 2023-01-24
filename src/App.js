import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
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
