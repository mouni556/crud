import React, { useState } from 'react';
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [error , seterror] = useState('')
  const navigator = useNavigate()

  const [loader , setloader] = useState('off')

  const { http } = Api();

  const handleForm = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setloader('on')
    http.post('create', { name: name, email: email, age: age })
      .then((res) => {
        console.log(res.data); // Use res.data to access the response data
        setloader('off');
        navigator('/')
      })
      .catch((error) => {
          if (error.response) {
            // The request was made, and the server responded with a status code
            console.error('Server responded with status code:', error.response.status);
            console.error('Response data:', error.response.data);
            console.error('Response headers:', error.response.headers);
            seterror(res.data.error.name)
            seterror(res.data.error.email)
            seterror(res.data.error.age)
           
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Request made, but no response received. Check your server.');
          } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error:', error.message);
          }
          setloader('off')
        });
        
      
  };

  return (
    <>
      <div className="container">
        <h1>CREATE USER</h1>
        <form onSubmit={handleForm}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
            />
            <p>{error}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              className="form-control"
              id="age"
            />
          </div>
          <button type="submit" className="btn btn-primary">
          {loader === 'off' && <span>Published Now</span>}
            {loader === 'on' && <div>Loading
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div> 
              
              </div>}
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
