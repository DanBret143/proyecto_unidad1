import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Seccion1 from './components/seccion1';
import Seccion2 from './components/seccion2';
import Seccion3 from './components/seccion3';
import HomePage from './HomePage';

function App() {
    return (
        <Router>
            <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBar />
                <div style={{ flex: 1, paddingTop: '64px' }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/seccion1" element={<Seccion1 />} />
                        <Route path="/seccion2" element={<Seccion2 />} />
                        <Route path="/seccion3" element={<Seccion3 />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
