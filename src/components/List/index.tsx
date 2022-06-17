import Item from './Item';
import style from './List.module.scss';
import { ITask } from '../../types/task';

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.tasksList}>
      <h2>Today studies</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
