import React,{useState} from 'react';
import "../styles/styles.css";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [name, setName]= useState(' ')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("freelancer"); // Default to freelancer
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call backend API
      fetch("https://freelancermarkerplace-backend-1.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role, name }),
      })
        .then((response) => response.json())

        .then((data) => {
          if (data.success) {
            
            alert("Registration Successful!");
            navigate('/login')
            
          } else {
            alert(data.message);
          }
        })
        .catch((error) => console.error("Error:", error));
    };
  
    return (
        <div className='register-page'>
           <div className="register-container">
            <h1 className="register-title">Register</h1>
      <form onSubmit={handleSubmit}>
      {/* <label className="register-label" htmlFor="username">Username</label> */}
      <input type='text'
       placeholder='Enter your Name'
      //  value={name} 
      //  onChange={(e)=>setName(e.target.value)}
       required
        className="register-input"/>
      
        <input
          type="email"
          placeholder="Email"
            className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         {/* <label className="register-label" htmlFor="password">Password</label> */}
        <input
          type="password"
          placeholder="Password"
           className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>
       <button className="register-button" type="submit">Register</button>
             </form>
      <p className="register-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
        </div>
        </div>
    );
};

export default Register;