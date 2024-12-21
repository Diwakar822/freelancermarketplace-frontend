import React,{useState} from 'react';
import "../styles/styles.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // Call backend API
      fetch("https://freelancermarkerplace-backend-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Login Successful!");
            localStorage.setItem("token", data.token);

              navigate('/client-dashboard')
                    
          } else {
            alert(data.message);
          }
        })
        .catch((err)=>{
          alert('login failed try agin')
        })
    };
  
    return (
        <div className='login-page'>
           <div className="login-container">
             <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label" htmlFor="email">Email</label>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         <label className="login-label" htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Login</button>
      </form>
          <a href="/forgot-password" className="login-link">Forgot Password?</a>
        </div>
        </div>
    );
};

export default Login;