import { Link } from 'react-router-dom';

const UserData = ({ title }) => {
  return (
    <div className='user-data'>
      <p>{title}</p>
      <Link
        to='/DormAdministration/'
        style={{ textDecoration: 'none', color: '#111' }}
      >
        <p>Log out</p>
      </Link>
    </div>
  );
};

UserData.defaultProps = {
  title: 'Username',
};

export default UserData;
