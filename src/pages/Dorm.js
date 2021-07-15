import axios from 'axios';
import { useState, useEffect } from 'react';
import UserData from '../components/UserData';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import Footer from '../components/Footer';
import { Username } from './Login';

const Dorm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Filter Data
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const inputData = { text1, text2, text3, text4 };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await axios.get(
      'https://60ec737ea78dc700178adb52.mockapi.io/api/camin/'
    );
    const data = await res.data;
    return data;
  };

  // Add Task
  const addTask = async (input) => {
    const task = {};
    task.Numar = input.text1;
    task.Admin = input.text2;
    task.Location = input.text3;
    task.Floors = input.text4;

    const res = await axios.post(
      'https://60ec737ea78dc700178adb52.mockapi.io/api/camin/',
      task
    );

    const data = await res.data;
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await axios.delete(
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${id}`
    );
    setTasks(tasks.filter((task) => task.ID_Camin !== id));
  };

  // Toggle Details
  const toggleDetails = (id) => {
    setTasks(
      tasks.map((task) =>
        task.ID_Camin === id ? { ...task, Details: !task.Details } : task
      )
    );
  };

  // Get Id
  const getId = (id) => {
    dormId = id;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText1('');
    setText2('');
    setText3('');
    setText4('');
  };

  return (
    <div className='container'>
      <UserData title={Username} />
      <Header
        title='Dorms'
        text='Add Dorm'
        onShow={() => {
          setShowForm(!showForm);
          setShowFilter(false);
        }}
        showAdd={showForm}
        onFilter={() => {
          setShowFilter(!showFilter);
          setShowForm(false);
        }}
        showFilter={showFilter}
      />
      {showFilter && (
        <div>
          <h3>Filters</h3>
          <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
              <label>Dorm</label>
              <input
                type='number'
                min='1'
                value={text1}
                onChange={(event) => setText1(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Administrator</label>
              <input
                type='text'
                value={text2}
                onChange={(event) => setText2(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Location</label>
              <input
                type='text'
                value={text3}
                onChange={(event) => setText3(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Floors</label>
              <input
                type='number'
                min='1'
                value={text4}
                onChange={(event) => setText4(event.target.value)}
              />
            </div>
            <input type='submit' value='Clear' className='btn btn-block' />
          </form>
        </div>
      )}
      {showForm && (
        <AddTask
          titleTag1='Dorm'
          titleTag2='Administrator'
          titleTag3='Location'
          titleTag4='Floors'
          onAdd={addTask}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          id='ID_Camin'
          tag1='Numar'
          titleTag1='Dorm '
          tag2='Admin'
          titleTag2='Administrator: '
          tag3='Location'
          titleTag3='Location: '
          tag4='Floors'
          titleTag4='Floors: '
          tag5='Details'
          link='/dorm/room/'
          inputData={inputData}
          onOpen={getId}
          onDelete={deleteTask}
          onToggle={toggleDetails}
        />
      ) : (
        'No Dorms To Show'
      )}
      <Footer />
    </div>
  );
};

export var dormId;
export default Dorm;
