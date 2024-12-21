import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewsForm = () => {
    const [review, setReview] = useState({ freelancerName: '', rating: '', comment: '' });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setReview({ ...review, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`https://freelancermarkerplace-backend-1.onrender.com/api/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review),
          });
    
          if (response.ok) {
            const newReview = await response.json();
            (newReview);
            alert('review sumbited successsfully')
            navigate('/');
          } else {
            alert('Failed to create review');
          }
        } catch (error) {
          console.error('Error submitting review:', error);
        }
      };
    return (
        <div>
              <div className="p-6 bg-gray-100 h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4">Create a Review</h1>

        <label className="block mb-2 font-medium">Freelancer Name</label>
        <input
          type="text"
          name="freelancerName"
          value={review.freelancerName}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded-lg"
          required
        />

        <label className="block mb-2 font-medium">Rating</label>
        <input
          type="number"
          name="rating"
          value={review.rating}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded-lg"
          min="1"
          max="5"
          required
        />
         <label className="block mb-2 font-medium">Comment</label>
        <textarea
          name="comment"
          value={review.comment}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded-lg"
          required
        ></textarea>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
            
        </div>
    );
};

export default ReviewsForm;