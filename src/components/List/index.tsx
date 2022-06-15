import Item from './Item';
import style from './List.module.scss';
import { ITask } from '../../types/task';

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.tasksList}>
      <h2>Today studies</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
