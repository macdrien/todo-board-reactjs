export default function Board({ states }) {
  return (
    <div class="flexCentered" style={{ flexDirection: "column" }}>
      <h1>Task board</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "5px"
        }}
      >
        {states.map((state) => (
          <div>
            <h2>{state.name}</h2>
            <div>
              {state.tasks.map((task) => (
                <div>
                  <h4>{task.name}</h4>
                  <div>
                    {task.tags.map((tag) => (
                      <div>{tag}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
