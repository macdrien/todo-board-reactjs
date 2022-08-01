import "./State.css";

export default function State({ state }) {
  const { name, tasks } = state;
  return (
    <div className="state">
      <h2>{name}</h2>
      <div className="tasks">
        {tasks.map((task) => (
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
  );
}
