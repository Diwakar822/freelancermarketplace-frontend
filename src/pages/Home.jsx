import React, { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import JobCard from "../components/JobCard";
import { fetchJobs, fetchServices } from "../services/api";
import "../styles/styles.css";
const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [services, setServices] = useState([]);
  
    useEffect(() => {
      // Fetch top jobs and services
      fetchJobs()
        .then((data) => setJobs(data.slice(0, 10))) // Display top 5 jobs
        .catch((error) => console.error("Error fetching jobs:", error));
  
      fetchServices()
        .then((data) => setServices(data.slice(0, 10))) // Display top 5 services
        .catch((error) => console.error("Error fetching services:", error));
    }, []);
    return (
        <div className="home-page">
             <header className="hero-section">
        <h1>Welcome to Freelance Marketplace</h1>
        <p>Connect with the best freelancers or find your dream projects.</p>
        <div className="hero-buttons">
          <a href="/register" className="button">Get Started</a>
          <a href="/search" className="button button-outline">Explore</a>
          <a href="/freelancer-dashboard" className="button">FreelancerDashboard</a>
          <a href="/client-dashboard" className="button button-outline">ClientDashboard</a>
        </div>
       
      
      </header>

      <section className="jobs-section">
       <h2>Top Job Listings</h2>
        <div className="jobs-list">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p>No jobs available right now.</p>
          )}
        </div>
        {/* <a href="/jobs" className="link">Create Jobs</a> */}
      </section>

      <section className="services-section">
        <h2>Top Freelancer Services</h2>
        <div className="services-list">
          {services.length > 0 ? (
            services.map((service) => <ServiceCard key={service.id} service={service} />)
          ) : (
            <p>No services available right now.</p>
          )}
        </div>
        {/* <a href="/services" className="link">Create Services</a> */}
      </section>

      <footer className="footer">
        <p>© 2024 Freelance Marketplace. All Rights Reserved.</p>
      </footer>
        </div>
    );
};

export default Home;