const states = [
  {
    name: "Todo",
    order: 0,
    tasks: [
      {
        name: "Publish",
        tags: ["publication"]
      }
    ]
  },
  {
    name: "Doing",
    order: 1,
    tasks: [
      {
        name: "Project front-end",
        tags: ["programming", "front-end", "ReactJS"]
      },
      {
        name: "Project back-end",
        tags: ["programming", "back-end", "Spring Boot"]
      }
    ]
  },
  {
    name: "Done",
    order: 2,
    tasks: [
      {
        name: "Prepare project",
        tags: ["documentation", "preparation"],
        state: "Done"
      }
    ]
  }
];

export default states;
