import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostJob from './pages/PostJob';
import AddService from './pages/AddService';
import PaymentButton from './components/PaymentButton';
import SearchFilters from './components/SearchFilters';
import Profile from './pages/Profile';
import AddContract from './pages/AddContract';
import ReviewsForm from './pages/ReviewsForm';
import ReviewsList from './pages/ReviewsList';



const App = () => {
  return (
    <div>
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path='/jobs' element={<PostJob/>} />
        <Route path='/services' element={< AddService/>}/>
        <Route path='/payment' element={<PaymentButton />} />
        <Route path='/search' element={<SearchFilters />} />
        <Route path='/profile' element={< Profile/>}/>
        <Route path='/Contract' element={<AddContract/>}/>
        <Route path='/review' element={<ReviewsForm/>} />
        <Route path='/reviewlist' element={< ReviewsList/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;