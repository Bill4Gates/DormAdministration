import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dorm from './pages/Dorm';
import Room from './pages/Room';
import Student from './pages/Student';
import PageNotFound404 from './pages/PageNotFound404';

function App() {
  return (
    <Router>
      <Route path='/DormAdministration/' exact component={Login} />
      <Route path='/register/' exact component={Register} />
      <Route path='/dorm/' exact component={Dorm} />
      <Route path='/dorm/room/' exact component={Room} />
      <Route path='/dorm/room/student/' exact component={Student} />
      <Route path='/404/' exact component={PageNotFound404} />
    </Router>
  );
}

export default App;
