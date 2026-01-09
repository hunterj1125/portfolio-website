import { Task, TaskStatus } from '../types/task';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface TaskColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

const statusColors = {
  'todo': 'bg-zinc-100 dark:bg-zinc-800',
  'in-progress': 'bg-blue-100 dark:bg-blue-900/20',
  'done': 'bg-green-100 dark:bg-green-900/20',
};

export default function TaskColumn({ title, status, tasks, onEditTask, onDeleteTask }: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col gap-4 min-w-[300px] flex-1 transition-colors rounded-lg p-4 ${isOver ? 'bg-blue-50 dark:bg-blue-950/20' : ''}`}
    >
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
          {title}
        </h2>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]} text-zinc-700 dark:text-zinc-300`}>
          {tasks.length}
        </span>
      </div>
      
      <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-3">
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-sm text-zinc-400 dark:text-zinc-600">
              No tasks yet
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))
          )}
        </div>
      </SortableContext>
    </div>
  );
}
