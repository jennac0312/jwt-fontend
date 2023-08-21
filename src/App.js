import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>My App</h1>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
