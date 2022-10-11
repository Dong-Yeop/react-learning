import ProTypes from 'prop-types';
import styled from './Button.module.css';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styled.btn}>
      {text}
    </button>
  );
}

Button.ProTypes = {
  text: ProTypes.string.isRequired,
};

export default Button;
