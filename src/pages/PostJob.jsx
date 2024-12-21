import React,{useState} from 'react';
import "../styles/styles.css";
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const navigate = useNavigate();
  
    const [job, setJob] = useState({
        title: "",
        description: "",
        budget: "",
        deadline: "",
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Call backend API
        fetch("https://freelancermarkerplace-backend-1.onrender.com/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(job),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Job posted successfully!");
               navigate('/')
            } else {
              alert(data.message);
            }
          })
          .catch((error) => console.error("Error:", error));
      };
    return (
        <div className="postjob-page">
            <div className="postjob-container">
            <h2 className="postjob-title">Post a Job</h2>

      <form className="postjob-form" onSubmit={handleSubmit}>

      <label className="postjob-label" htmlFor="job-title">Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
           id="job-title"
           className="postjob-input"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          required
        />

        <label className="postjob-label" htmlFor="job-description">Job Description</label>
        <textarea
          placeholder="Job Description"
           id="job-description"
            className="postjob-textarea"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
          required
        />

        {/* <input
          type="number"
          placeholder="Budget"
          value={job.budget}
          onChange={(e) => setJob({ ...job, budget: e.target.value })}
          required
        />
         */}
         <input
          type="number"
          placeholder="budget"
           className="postjob-input"
          value={job.budget}
          onChange={(e) => setJob({ ...job, budget: e.target.value })}
          required
        /> 
        <button className="postjob-button" type="submit">Post Job</button>
      </form>
        </div>
        </div>
    );
};

export default PostJob;