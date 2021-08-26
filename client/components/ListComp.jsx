import React from 'react';

function ListComp() {
  return (
    <div className="list">
      <div className="listData">
        <h2 className="title">Belajar GraphQL</h2>
        <p className="time">12 menit yang lalu</p>
      </div>
      <div className="listAction">
        <button type="submit" className="doneListBtn">Selesai</button>
        <button type="submit" className="deleteListBtn">Hapus</button>
      </div>
    </div>
  )
}

export default ListComp;
