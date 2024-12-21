import React,{useState, useEffect} from 'react';
import "../styles/styles.css";
import ContractCard from '../components/ContractCard';
const API_URL = "https://freelancermarkerplace-backend-1.onrender.com/api/contract"; // Replace with your actual backend URL

const AddContract = () => {
    const [contracts, setContracts] = useState([]);
    const [formData, setFormData] = useState({
      otherParty: "",
      projectTitle: "",
      status: "", // Optional
      milestonesCompleted: 0,
    });
    const [error, setError] = useState("");
  
    // Fetch all contracts
    const fetchContracts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch contracts.");
        const data = await response.json();
        setContracts(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching contracts:", error);
      }
    };
  
    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const payload = {
        otherParty: formData.otherParty,
        projectTitle: formData.projectTitle,
        status: formData.status || "Pending" , // Default to "Pending" if empty
        milestonesCompleted: parseInt(formData.milestonesCompleted, 10),
      };
  
      try {
        const response = await fetch('http://localhost:5000/api/contract', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) throw new Error("Failed to create contract.");
  
        alert("Contract created successfully!");
        setFormData({ otherParty: "", projectTitle: "", status: "", milestonesCompleted: 0 });
        fetchContracts(); // Refresh contracts list
      } catch (error) {
        setError(error.message);
        alert("Oops somthing you missed to fill ")
      }
    };
  
    // Fetch contracts on initial load
    useEffect(() => {
      fetchContracts();
    }, []);
    return (
        <div className="App">
        <h1> Create the Contract and view your Contract below</h1>
  
        <form className="form" onSubmit={handleSubmit}>
          <h2>Create a Contract</h2>
          <label>
            Other Party:
            <input
              type="text"
              name="otherParty"
              value={formData.otherParty}
              onChange={handleInputChange}
              className="input"
              required
            />
          </label>
          <label>
            Project Title:
            <input
              type="text"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              className="input"
              required
            />
          </label>
          <label>
            Status (Optional):
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="">select Option</option>
              {/* <option value="Pending">Pending</option> */}
              <option value="Active">Active</option>
              {/* <option value="Completed">Completed</option> */}
            </select>
          </label>
          <label>
            Milestones Completed:
            <input
              type="number"
              name="milestonesCompleted"
              value={formData.milestonesCompleted}
              onChange={handleInputChange}
              className="input"
              required
            />
          </label>
          <button className="postjob-button"  type="submit">Create Contract</button>
        </form>
  
        {error && <p className="error">{error}</p>}
  
        <h2>Contracts</h2>
        {contracts.length > 0 ? (
          <table  className="contract-table">
            <thead>
              <tr>
                <th>Other Party</th>
                <th>Project Title</th>
                <th>Status</th>
                <th>Milestones Completed</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract, index) => (
                <tr key={index}>
                  <td>{contract.otherParty}</td>
                  <td>{contract.projectTitle}</td>
                  <td>{contract.status}</td>
                  <td>{contract.milestonesCompleted}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No contracts found.</p>
        )}
      </div>
    );
};

export default AddContract;