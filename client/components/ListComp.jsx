import React from 'react';

function ListComp({ list }) {
  return (
    <div className="list">
      <div className="listData">
        <h2 className="title">{list.title}</h2>
        <p className="time">{list.time}</p>
      </div>
      <div className="listAction">
        <button type="submit" className="fas fa-pen listBtn doneListBtn"></button>
        <button type="submit" className="fas fa-trash listBtn deleteListBtn"></button>
      </div>
    </div>
  )
}

export default ListComp;
