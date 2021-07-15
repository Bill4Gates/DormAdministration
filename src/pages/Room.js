import axios from 'axios';
import { useState, useEffect } from 'react';
import UserData from '../components/UserData';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import Footer from '../components/Footer';
import { dormId } from './Dorm';
import { Username } from './Login';

const Room = () => {
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
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${dormId}/camera/`
    );
    const data = await res.data;
    return data;
  };

  // Add Task
  const addTask = async (input) => {
    const task = {};
    task.NumarCamera = input.text1;
    task.Etaj = input.text2;
    task.NrLocuri = input.text3;
    task.TipCamera = input.text4;

    const res = await axios.post(
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${dormId}/camera/`,
      task
    );

    const data = await res.data;
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await axios.delete(
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${dormId}/camera/${id}`
    );
    setTasks(tasks.filter((task) => task.ID_Camera !== id));
  };

  // Toggle Details
  const toggleDetails = (id) => {
    setTasks(
      tasks.map((task) =>
        task.ID_Camera === id ? { ...task, Details: !task.Details } : task
      )
    );
  };

  // Get Id
  const getId = (id) => {
    roomId = id;
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
        title='Rooms'
        text='Add Room'
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
              <label>Room</label>
              <input
                type='number'
                min='1'
                value={text1}
                onChange={(event) => setText1(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Floor</label>
              <input
                type='number'
                min='1'
                value={text2}
                onChange={(event) => setText2(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Beds</label>
              <input
                type='number'
                min='1'
                value={text3}
                onChange={(event) => setText3(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Room type</label>
              <input
                type='text'
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
          titleTag1='Room'
          titleTag2='Floor'
          titleTag3='Beds'
          titleTag4='Room type'
          onAdd={addTask}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          id='ID_Camera'
          tag1='NumarCamera'
          titleTag1='Room '
          tag2='Etaj'
          titleTag2='Floor: '
          tag3='NrLocuri'
          titleTag3='Beds: '
          tag4='TipCamera'
          titleTag4='Room type: '
          tag5='Details'
          link='/dorm/room/student/'
          inputData={inputData}
          onOpen={getId}
          onDelete={deleteTask}
          onToggle={toggleDetails}
        />
      ) : (
        'No Rooms To Show'
      )}
      <Footer />
    </div>
  );
};

export var roomId;
export default Room;
