import React from "react";

interface Task {
  title: string;
}

interface TasksListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TasksListProps) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return <li key={i}> {task.title} </li>;
      })} 
    </ul>
  );
};

const tasks = [
  { title: "task one" },
  { title: "task two" },
  { title: "task three " },
];

const RenderList = () => {
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default RenderList;
