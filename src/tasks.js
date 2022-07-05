const states = [
  {
    name: "Todo",
    order: 0
  },
  {
    name: "Doing",
    order: 1
  },
  {
    name: "Done",
    order: 2
  }
];

const tasks = [
  {
    name: "Prepare project",
    tags: ["documentation", "preparation"],
    state: "Done"
  },
  {
    name: "Project front-end",
    tags: ["programming", "front-end", "ReactJS"],
    state: "Doing"
  },
  {
    name: "Project back-end",
    tags: ["programming", "back-end", "Spring Boot"],
    state: "Doing"
  },
  {
    name: "Publish",
    tags: ["publication"],
    state: "Todo"
  }
];

export { states, tasks };
export default tasks;
