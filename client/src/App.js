import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import { useCookies } from 'react-cookie';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';

function App() {
  const [cookies, setCookie] = useCookies(["storeId"]);
  const isAuthenticated = cookies.storeId ? true : false;
  return (
    <div className="App">
      <BrowserRouter>
        {
          isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path='/inventory' element={<Inventory />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<LoginPage />} />
            </Routes>
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
