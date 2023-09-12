// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kitties from './pages/kitties';
import Puppies from './pages/puppies';
import Cart from './pages/cart';

import './App.css';
import { MyContextProvider } from './ContextProvider';

function App() {
    return (
        <MyContextProvider>
            <div className="appContainer">
                <div className="petContainer">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Kitties />} />
                            <Route path="/puppies" element={<Puppies />} />
                        </Routes>
                    </Router>
                </div>
                <div className="cartBox">
                    <Cart />
                </div>
            </div>
        </MyContextProvider>
    );
}

export default App;
