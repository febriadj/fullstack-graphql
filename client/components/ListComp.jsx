import React from 'react';
import moment from 'moment';

function ListComp({ list, handleDeleteBtn }) {
  function time() {
    return moment(list.time).locale('id').fromNow();
  }
  return (
    <div className="list">
      <div className="listData">
        <h3 className="title">{list.title}</h3>
        <p className="time">{time()}</p>
      </div>
      <div className="listAction">
        <button type="submit" className="fas fa-pen listBtn doneListBtn"></button>
        <button
          type="submit"
          className="fas fa-trash listBtn deleteListBtn"
          onClick={handleDeleteBtn}
          value={list.id}
        >
        </button>
      </div>
    </div>
  )
}

export default ListComp;
