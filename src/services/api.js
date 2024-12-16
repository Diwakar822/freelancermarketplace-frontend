const API_BASE_URL = "http://localhost:5000/api";

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const registerUser = async (userDetails) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  });
  return response.json();
};

export const fetchJobs = async () => {
  const response = await fetch(`${API_BASE_URL}/jobs`);
  return response.json();
};

export const fetchServices = async () => {
  const response = await fetch(`${API_BASE_URL}/services`);
  return response.json();
};

export const postJob = async (jobDetails) => {
  const response = await fetch(`${API_BASE_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobDetails),
  });
  return response.json();
};

export const addService = async (serviceDetails) => {
  const response = await fetch(`${API_BASE_URL}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(serviceDetails),
  });
  return response.json();
};