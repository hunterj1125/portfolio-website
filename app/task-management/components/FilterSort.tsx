'use client';

import { TaskPriority } from '../types/task';

interface FilterSortProps {
  selectedPriority: TaskPriority | 'all';
  onPriorityChange: (priority: TaskPriority | 'all') => void;
  sortBy: 'dueDate' | 'priority' | 'createdAt';
  onSortChange: (sortBy: 'dueDate' | 'priority' | 'createdAt') => void;
}

export default function FilterSort({
  selectedPriority,
  onPriorityChange,
  sortBy,
  onSortChange,
}: FilterSortProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Filter by Priority:
        </label>
        <select
          value={selectedPriority}
          onChange={(e) => onPriorityChange(e.target.value as TaskPriority | 'all')}
          className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as 'dueDate' | 'priority' | 'createdAt')}
          className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="createdAt">Created Date</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
}
