import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState([]);
  const { http } = Api();

  useEffect(() => {
    http.get('/getall')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletoperation = (id) => {
    http.delete('/delete/' + id)
      .then(() => navigator('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container p-5">
      <h1>ALL USERS</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <Link to={`/update/${user.id}`} state={user}> {/* Pass user data as state */}
                  <button className='btn btn-success'> Update</button>
                </Link>
                <button className='btn btn-danger  m-2' onClick={() => { deletoperation(user.id) }}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
