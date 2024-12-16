import React from 'react';
import "../styles/styles.css";
import { Link } from 'react-router-dom';

const ClientDashboard = () => {
    return (
              <div className="client-dashboard-page">
      <header className="client-dashboard-header">
        <h2>Client Dashboard</h2>
      </header>
      <div className="client-dashboard-summary">
        <div className="client-summary-item">
          <h4>8</h4>
          <p>Active Job Listings</p>
        </div>
        <div className="client-summary-item">
          <h4>15</h4>
          <p>Hired Freelancers</p>
        </div>
        <div className="client-summary-item">
          <h4>4.9</h4>
          <p>Average Freelancer Rating</p>
        </div>
      </div>
      <section className="client-dashboard-content">
        <div className="client-dashboard-card">
          <h3>Job Listings</h3>
          <p>3 active listings</p>
          <p>2 awaiting review</p>
          <div className="card-action">
            <Link to={'/jobs'}><button className="action-button">Create Job</button></Link>
          </div>
        </div>
        <div className="client-dashboard-card">
          <h3>Contracts</h3>
          <p>5 contracts in progress</p>
          <p>2 completed recently</p>
          <div className="card-action">
           <Link to={'/Contract'}><button className="action-button">Create Contracts</button></Link>
          </div>
        </div>
        <div className="client-dashboard-card">
          <h3>Freelancer Reviews</h3>
          <p>3 freelancers rated this week</p>
          <p>Overall rating: 4.9</p>
          <div className="card-action">
           <Link to={'/review'}><button className="action-button">Create Reviews</button></Link>
          </div>
        </div>
        <div className="client-dashboard-card">
          <h3>Payments</h3>
          <p>Total: $5,000 this month</p>
          <p>Pending: $1,200</p>
          <div className="card-action">
            <Link to={'/payment'}><button className="action-button">Make Payments</button></Link>
          </div>
        </div>
        <div className="client-dashboard-card">
          <h3>Services</h3>
          <p>5 recent services</p>
          <p>7 overall services</p>
          <div className="card-action">
        <Link to={'/services'}><button className="action-button">Create Service</button></Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ClientDashboard;
