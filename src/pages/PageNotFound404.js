import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageNotFound404 = () => {
  return (
    <div className='container'>
      <Header title='404' />
      <h4>Page Not Found</h4>
      <Link to='/dorm/room/student/'>Go Back</Link>
      <Footer />
    </div>
  );
};

export default PageNotFound404;
