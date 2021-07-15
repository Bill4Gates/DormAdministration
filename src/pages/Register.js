import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const goToLogin = useCallback(
    () => history.push('/DormAdministration/'),
    [history]
  );
  const activateLink = useCallback(() => history.push('/dorm/'), [history]);

  //Add User
  const addUser = async (input) => {
    const user = {};
    user.Username = input.username;
    user.Email = input.email;
    user.Password = input.password;

    const res = await axios.post(
      'https://60ec737ea78dc700178adb52.mockapi.io/api/users/',
      user
    );

    const data = await res.data;
    console.log(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (username !== '') {
      if (email !== '') {
        if (password !== '') {
          activateLink();
          addUser({ username, email, password });
          setUsername('');
          setEmail('');
          setPassword('');
        } else {
          alert('Password is empty');
        }
      } else {
        alert('Email is empty');
      }
    } else {
      alert('Username is empty');
    }
  };

  const onLogin = () => {
    goToLogin();
  };

  return (
    <div className='container'>
      <Header title='Register' text='Login' color='#111' onShow={onLogin} />
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
          <label>Email</label>
          <input
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
        <input type='submit' value='Register' className='btn btn-block' />
      </form>
      <Footer />
    </div>
  );
};

export default Register;
