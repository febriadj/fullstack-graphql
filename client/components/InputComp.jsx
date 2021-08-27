import React from 'react';

function InputComp({
  handleChange,
  handleEnter,
  handleClickBtn,
  inputValue,
}) {
  return (
    <div className="inputComp" onKeyUp={handleEnter}>
      <div className="inputCompWrap">
        <input
          type="text"
          className="inputTag"
          onChange={handleChange}
          value={inputValue}
          placeholder="Apa yang akan kamu lakukan hari ini?"
        />
        <button
          type="submit"
          className="fas fa-paper-plane inputBtn"
          onClick={handleClickBtn}
        >
        </button>
      </div>
    </div>
  )
}

export default InputComp;
