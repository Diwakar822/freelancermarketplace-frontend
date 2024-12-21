import axios from 'axios';
import React,{useState} from 'react';
const PaymentButton = ({ amount }) => {

  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://freelancermarkerplace-backend-1.onrender.com/api/payments", formData);
      // alert("Payment submitted successfully!");
      // console.log(response.data);
    } catch (error) {
      // console.error("Error submitting payment:", error);
      // alert("Failed to process payment.");
    }
  };
  // =========================================================================================================

    const handlePayment = () => {
        const options = {
          key: "rzp_test_zgyR4GLQ8msnrV",
          amount: amount * 100, // Amount in paise
          currency: "INR",
          name: "Freelance Marketplace",
          description: "Payment for services",
          handler: (response) => {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            // Send payment details to backend
          },
          prefill: {
            name:"diwakar",
            email: "lokeshbsccomputerscience@gmail.com",
            contact: "1234567890",
          },
          notes:{
               address:"RazorPay corparate office"
          },
          theme: {
            color: "#3399cc",
          },
        };
        const razorpay = new window.Razorpay(options)
        razorpay.open();
      };
    return (
        <div>
           <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Payment Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>
        {/* <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Submit Payment
        </button> */}
         <button type="submit"  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600" onClick={handlePayment}>Pay ₹{amount}</button>
      </form>

    </div>
           
        </div>
    );
};

export default PaymentButton;