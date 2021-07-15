import { useState } from 'react';

const AddTask = ({ titleTag1, titleTag2, titleTag3, titleTag4, onAdd }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (!text1) {
      alert('Please add a ' + titleTag1);
      return;
    } else if (!text2) {
      alert('Please add a ' + titleTag2);
      return;
    } else if (!text3) {
      alert('Please add a ' + titleTag3);
      return;
    } else if (!text4) {
      alert('Please add a ' + titleTag4);
      return;
    } else {
      onAdd({ text1, text2, text3, text4 });
      setText1('');
      setText2('');
      setText3('');
      setText4('');
    }
  };

  return (
    <div>
      <h3>Add {titleTag1}</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>{titleTag1}</label>
          <input
            type='text'
            value={text1}
            onChange={(event) => setText1(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>{titleTag2}</label>
          <input
            type='text'
            value={text2}
            onChange={(event) => setText2(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>{titleTag3}</label>
          <input
            type='text'
            value={text3}
            onChange={(event) => setText3(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>{titleTag4}</label>
          <input
            type='text'
            value={text4}
            onChange={(event) => setText4(event.target.value)}
          />
        </div>

        <input type='submit' value='Save' className='btn btn-block' />
      </form>
    </div>
  );
};

AddTask.defaultProps = {
  titleTag1: 'Title',
  titleTag2: 'Title',
  titleTag3: 'Title',
  titleTag4: 'Title',
};

export default AddTask;
