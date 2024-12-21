import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/styles.css";

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      name,
      email,
      bio,
      skills: skills.split(','),
      portfolio,
    };

    try {
      const response = await fetch('https://freelancermarkerplace-backend-1.onrender.com/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const data = await response.json();
        setProfiles([...profiles, data]);
        setName('');
        setEmail('');
        setBio('');
        setSkills('');
        setPortfolio('');

        alert('profile created successfully')
      
          navigate('/freelancer-dashboard')

      } else {
        alert('enter the requied fild')
        
      }
    } catch (err) {
      console.error('Error creating profile:', err);
    
    }
  };

  const fetchProfiles = async () => {
    try {
      const response = await fetch('https://freelancermarkerplace-backend-1.onrender.com/api/profile');
      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
      } else {
        console.error('Error fetching profiles:', response.statusText);
      }
    } catch (err) {
      console.error('Error fetching profiles:', err);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">Create Profile And see your Profile Below</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="textarea"
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="input"
        />
        <input
          type="url"
          placeholder="Portfolio URL"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Create Profile
        </button>
      </form>

      <h2 className="heading">Profiles</h2>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <div key={profile._id} className="profile-card">
            <h3 className="profile-name"> <strong>Name:</strong>{profile.name}</h3>
            <p className="profile-email"> <strong>Mail:</strong>{profile.email}</p>
            <p className="profile-bio"> <strong>Bio:</strong>{profile.bio}</p>
            <p>
              <strong>Skills:</strong> {profile.skills.join(', ')}
            </p>
            <a 
              href={profile.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              // className="profile-portfolio"
              className="bg-blue-500 text-white text-center px-4 py-2  rounded-lg cursor-pointer hover:bg-blue-600 transition-al"
            >
              View portfolio 
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
