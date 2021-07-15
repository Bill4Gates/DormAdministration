import { FaFilter } from 'react-icons/fa';

const FilterButton = ({ color, onFilter, showFilter }) => {
  return (
    <FaFilter
      className='filter-icon'
      style={{ backgroundColor: color }}
      onClick={onFilter}
    />
  );
};

export default FilterButton;
