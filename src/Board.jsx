export default function Board({ states }) {
  return (
    <div class="flexCentered" style={{ flexDirection: "column" }}>
      <h1>Task board</h1>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px"
        }}
      >
        {states.map((state) => (
          <div
            style={{
              backgroundColor: "#dddddd",
              borderRadius: "10px",
              boxShadow: "1px 1px #aaaaaa",
              margin: 0,
              padding: "10px"
            }}
          >
            <h2>{state.name}</h2>
            <div
              style={{
                margin: 0,
                padding: 0
              }}
            >
              {state.tasks.map((task) => (
                <div
                  style={{
                    backgroundColor: "#bbbbbb",
                    border: "1px solid #aaaaaa",
                    boxShadow: "1px 1px #999999",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h3 style={{ marginBottom: "10px" }}>{task.name}</h3>
                  <div
                    className="flexCentered"
                    style={{
                      flexWrap: "wrap",
                      gap: "5px",
                      marginBottom: "10px"
                    }}
                  >
                    {task.tags.map((tag) => (
                      <div
                        style={{
                          padding: "5px",
                          backgroundColor: "#dddddd",
                          boxShadow: "1px 1px #999999",
                          borderRadius: "5px"
                        }}
                      >
                        {tag}
                      </div>
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
