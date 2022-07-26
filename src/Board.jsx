export default function Board({ states }) {
  return states.map((state) => (
    <div>
      <h4>{state.name}</h4>
      <ul>
        {state.tasks.map((task) => (
          <li>
            {task.name}
            <ul>
              {task.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  ));
}
