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
        />
        <button
          type="submit"
          className="inputBtn"
          onClick={handleClickBtn}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default InputComp;
