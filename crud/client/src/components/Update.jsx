import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const Update = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const { state } = useLocation(); // Access state passed from Link
  const [userData, setUserData] = useState(state || { name: '', email: '', age: 0 }); // Initialize with state or empty values
  const { http } = Api();

  useEffect(() => {
    if (!state) { // Fetch data only if state is not available (when accessing via URL)
      http.get(`/getall/${id}`)
        .then((res) => setUserData(res.data))
        .catch((err) => console.log(err));
    }
  }, [http, id, state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Implement your update logic here
    console.log('Updated data:', userData);
  
    // Make an HTTP PUT request to update the user
    http.put(`/update/${id}`, userData)
      .then((res) => {
        console.log('User Updated Successfully:', res.data);
        // Navigate to a different page or perform other actions as needed
        navigator('/');
      })
      .catch((err) => console.log(err));
  };

  
  
  
  
  
  

  return (
    <>
      <div className="container">
        <h1>UPDATE USER</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              name="name"
              value={userData.name}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              name="email"
              value={userData.email}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              name="age"
              value={userData.age}
              type="number"
              className="form-control"
              id="age"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
