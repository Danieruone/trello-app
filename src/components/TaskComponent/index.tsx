import { FC } from 'react';
import './index.css';

interface Props {
  drag: any;
}

export const TaskComponent: FC<Props> = ({ drag }) => {
  return (
    <div
      className='task-container'
      id='drag-1'
      draggable
      onDragStart={(e) => drag(e)}
    >
      Task example
    </div>
  );
};
