export default function Board({ tasks }) {
  return tasks.map((task) => (
    <div>
      <h4>{task.name}</h4>
      <ul>
        {task.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  ));
}
