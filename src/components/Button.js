const Button = ({ text, color, onShow }) => {
  return (
    <button onClick={onShow} style={{ backgroundColor: color }} className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Add',
};

export default Button;
