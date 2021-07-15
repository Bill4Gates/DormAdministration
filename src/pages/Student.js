import axios from 'axios';
import { useState, useEffect } from 'react';
import UserData from '../components/UserData';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import Footer from '../components/Footer';
import { dormId } from './Dorm';
import { roomId } from './Room';
import { Username } from './Login';

const Student = () => {
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
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${dormId}/camera/${roomId}/student/`
    );
    const data = await res.data;
    return data;
  };

  // Add Task
  const addTask = async (input) => {
    const task = {};
    task.Nume = input.text1;
    task.Sex = input.text2;
    task.Facultate = input.text3;
    task.FormaFinantare = input.text4;

    const res = await axios.post(
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${dormId}/camera/${roomId}/student/`,
      task
    );

    const data = await res.data;
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await axios.delete(
      `https://60ec737ea78dc700178adb52.mockapi.io/api/camin/${dormId}/camera/${roomId}/student/${id}`
    );
    setTasks(tasks.filter((task) => task.ID_Student !== id));
  };

  // Toggle Details
  const toggleDetails = (id) => {
    setTasks(
      tasks.map((task) =>
        task.ID_Student === id ? { ...task, Details: !task.Details } : task
      )
    );
  };

  // Get Id
  const getId = (id) => {
    studentId = id;
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
        title='Students'
        text='Add Student'
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
              <label>Name</label>
              <input
                type='text'
                value={text1}
                onChange={(event) => setText1(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Sex</label>
              <input
                type='text'
                value={text2}
                onChange={(event) => setText2(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>Faculty</label>
              <input
                type='text'
                value={text3}
                onChange={(event) => setText3(event.target.value)}
              />
            </div>
            <div className='form-control'>
              <label>State/Tax</label>
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
          titleTag1='Student'
          titleTag2='Sex'
          titleTag3='Faculty'
          titleTag4='State/Tax'
          onAdd={addTask}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          id='ID_Student'
          tag1='Nume'
          titleTag1=''
          tag2='Sex'
          titleTag2='Sex: '
          tag3='Facultate'
          titleTag3='Faculty: '
          tag4='FormaFinantare'
          titleTag4='State/Tax: '
          tag5='Details'
          link='/404/'
          inputData={inputData}
          onOpen={getId}
          onDelete={deleteTask}
          onToggle={toggleDetails}
        />
      ) : (
        'No Students To Show'
      )}
      <Footer />
    </div>
  );
};

export var studentId;
export default Student;
