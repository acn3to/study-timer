import React, { useState } from 'react';
import Item from './Item';
import style from './List.module.scss';

function List() {
  const [tasks, setTasks] = useState([
    {
      task: 'Learn React',
      time: '02:00:00',
    },
    {
      task: 'Learn TypeScript',
      time: '01:00:00',
    },
    {
      task: 'Learn Node.js',
      time: '03:00:00',
    },
  ]);
  return (
    <aside className={style.tasksList}>
      <h2
        onClick={() => {
          setTasks([...tasks, { task: 'New task', time: '00:00:00' }]);
        }}
      >
        Today studies
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
