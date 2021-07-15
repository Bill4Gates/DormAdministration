import { Link } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';

const Task = ({
  id,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  titleTag1,
  titleTag2,
  titleTag3,
  titleTag4,
  link,
  onDelete,
  onOpen,
  onToggle,
}) => {
  return (
    <div
      className={`task ${tag5 ? 'details' : ''}`}
      onDoubleClick={() => onToggle(id)}
    >
      <h3>
        {titleTag1}
        {tag1}
        <FaTimes onClick={() => onDelete(id)} style={{ color: '#CC1C1C' }} />
      </h3>
      <section>
        <div>
          <p>
            {titleTag2}
            {tag2}
          </p>
          <p>
            {titleTag3}
            {tag3}
          </p>
          <p>
            {titleTag4}
            {tag4}
          </p>
        </div>
        <div>
          <Link to={link}>
            <FaSearch
              onClick={() => onOpen(id)}
              style={{ color: '#007AF3', marginTop: '52px' }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

Task.defaultProps = {
  titleTag1: 'Title',
  link: '/',
};

export default Task;
