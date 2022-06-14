import React from 'react';

function List() {
  const tasks = [
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
  ];
  return (
    <aside>
      <h2>Today studies</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
