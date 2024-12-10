import React, { useState } from "react";

export default function Workitems() {
  const [work, setWork] = useState([]);
  const [searchWork, setSearchWork] = useState("");

  function handleSearchWork(e) {
    setSearchWork(event.target.value);
    console.log(searchWork);
  }
  function handleWork() {
    setWork([...work, { searchWork }]);
    console.log(work);
  }

  let res = work.map((id, item) => {
    return (
      <tr id={item}>
        <td>{id.searchWork}</td>
        <button>del</button>
      </tr>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ marginLeft: "10%" }}>
        <label for="work">Вид работ</label>
        <input name="work" value={searchWork} onChange={handleSearchWork} />
        <button onClick={handleWork}>add</button>
      </div>

      <div>
        <table style={{ backgroundColor: "grey", width: "90%" }}>
          <thead>
            <td>№ работы</td>
            <td>Выбрать</td>
            <td>Вид работ</td>
            <td>Стоимость работ</td>
          </thead>
          <div>
            <ul>{res}</ul>
          </div>
        </table>
      </div>
    </div>
  );
}
