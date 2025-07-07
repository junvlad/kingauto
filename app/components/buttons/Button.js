const Button = ({ type = 'button', text = 'текст для кнопки', onClick }) => {
  return (
    <button className="button-menu" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
