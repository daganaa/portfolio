import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Landing from './pages/Landing';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Dropdown />
      {/*TODO: make better header. <Header />*/}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
