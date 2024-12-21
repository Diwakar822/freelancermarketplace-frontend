import React,{useState} from 'react';

const AddService = () => {
    const [service, setService] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Call backend API
        fetch("https://freelancermarkerplace-backend-1.onrender.com/api/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(service),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Service added successfully!");
            } else {
              alert(data.message);
            }
          })
          .catch((error) => console.error("Error:", error));
      };
    return (
        <div className="postjob-page">
           <div className="postjob-container">
             <h1 className="postjob-title">Add a Service</h1>
      <form  className="postjob-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Title"
           id="job-title"
           className="postjob-input"
          value={service.title}
          onChange={(e) => setService({ ...service, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Service Description"
           id="job-description"
            className="postjob-textarea"
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="postjob-input"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
           id="job-title"
           className="postjob-input"
          value={service.category}
          onChange={(e) => setService({ ...service, category: e.target.value })}
          required
        />
        <button className="postjob-button" type="submit">Add Service</button>
      </form>
        </div>
        </div>
      
    );
};

export default AddService;