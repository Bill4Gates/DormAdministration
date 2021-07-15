import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const goToRegister = useCallback(() => history.push('/register/'), [history]);
  const activateLink = useCallback(() => history.push('/dorm/'), [history]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  // Fetch Users
  const fetchUsers = async () => {
    const res = await axios.get(
      'https://60ec737ea78dc700178adb52.mockapi.io/api/users/'
    );
    const data = await res.data;
    return data;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (username !== '') {
      if (password !== '') {
        if (users.find((user) => user.Username === username)) {
          if (users.find((user) => user.Password === password)) {
            Username = username;
            activateLink();
            setUsername('');
            setPassword('');
          } else {
            alert('Password Incorrect');
            setPassword('');
          }
        } else {
          alert('Username Incorrect');
          setUsername('');
        }
      } else {
        alert('Password is empty');
      }
    } else {
      alert('Username is empty');
    }
  };

  const onRegister = () => {
    goToRegister();
  };

  return (
    <div className='container'>
      <Header title='Login' text='Register' color='#111' onShow={onRegister} />
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <input type='submit' value='Login' className='btn btn-block' />
      </form>
      <Footer />
    </div>
  );
};

export var Username;
export default Login;
