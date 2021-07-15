import { useLocation } from 'react-router-dom';
import Button from './Button';
import FilterButton from './FilterButton';

const Header = ({
  title,
  text,
  color,
  onShow,
  showAdd,
  onFilter,
  showFilter,
}) => {
  const location = useLocation();

  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        {location.pathname !== '/DormAdministration' &&
          location.pathname !== '/DormAdministration/' &&
          location.pathname !== '/register/' &&
          location.pathname !== '/404/' && (
            <FilterButton
              color={showFilter ? '#CC1C1C' : color}
              onFilter={onFilter}
            />
          )}
        {location.pathname !== '/404/' && (
          <Button
            text={showAdd ? 'Close' : text}
            color={showAdd ? '#CC1C1C' : color}
            onShow={onShow}
          />
        )}
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: 'Title',
  color: '#007AF3',
};

export default Header;
