import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import CompanyDetail from './components/CompanyDetail';
import Profile from './components/Profile'; // Import Profile component
import MessagePage from './pages/MessagePage'; // Import MessagePage component
import PostOrder from './pages/PostOrder'; // Import PostOrder component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile route */}
          <Route path="/messages" element={<MessagePage />} /> {/* MessagePage route */}
          <Route path="/post-order" element={<PostOrder />} /> {/* New PostOrder route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
