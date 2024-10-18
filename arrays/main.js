import user1 from "/assets/user1.png";
import user2 from "/assets/user2.png";
import user3 from "/assets/user3.png";
import user4 from "/assets/user4.png";

export const UserList = [
  { name: "user3", image: user3 },
  { name: "user4", image: user4 },
  { name: "user1", image: user1 },
  { name: "user2", image: user2 },
  { name: "user3", image: user3 },
  { name: "user4", image: user4 },
];

export const AllList = {
  tasks: {
    31: {
      id: 31,
      title: "Mobile App Design",
      // para: "Brainstorming brings team members' diverse experience into play. ",
      image: [
        {
          img: "/assets/appUI.png",
          name: "appUI",
        },
      ],
      label: "completed",
      comments: 12,
      files: 15,
      UserList: [
        { name: "user3", image: user3 },
        { name: "user4", image: user4 },
      ],
    },
    32: {
      id: 32,
      title: "Design System",
      para: "It just needs to adapt the UI from what you did before ",
      label: "completed",
      comments: 12,
      files: 15,
      UserList: [
        { name: "user3", image: user3 },
        { name: "user1", image: user1 },
        { name: "user2", image: user2 },
        { name: "user4", image: user4 },
      ],
    },
    21: {
      id: 21,
      title: "Onboarding Illustrations ",
      // para: "Brainstorming brings team members' diverse experience into play. ",
      image: [
        {
          img: "/assets/flower.jpg",
          name: "flower",
        },
      ],
      label: "low",
      comments: 12,
      files: 0,
      UserList: [
        { name: "user3", image: user3 },
        { name: "user4", image: user4 },
        { name: "user1", image: user1 },
        { name: "user2", image: user2 },
        { name: "user3", image: user3 },
        { name: "user4", image: user4 },
      ],
    },
    22: {
      id: 22,
      title: "Moodboard",
      // para: "Brainstorming brings team members' diverse experience into play. ",
      image: [
        {
          img: "/assets/flowerPlot.png",
          name: "flowerPlot",
        },
        {
          img: "/assets/dog.png",
          name: "dog",
        },
      ],
      label: "low",
      comments: 9,
      files: 10,
      UserList: [{ name: "user3", image: user3 }],
    },
    11: {
      id: 11,
      title: "Brainstorming",
      para: "Brainstorming brings team members' diverse experience into play. ",
      label: "low",
      comments: 12,
      files: 0,
      UserList: [
        { name: "user3", image: user3 },
        { name: "user4", image: user4 },
        { name: "user1", image: user1 },
      ],
    },
    12: {
      id: 12,
      title: "Research",
      para: "User research helps you to create an optimal product for users.",
      comments: 10,
      label: "high",
      files: 3,
      UserList: [
        { name: "user4", image: user4 },
        { name: "user1", image: user1 },
      ],
    },
    13: {
      id: 13,
      title: "Wireframes",
      para: "Low fidelity wireframes include the most basic content and visuals.",
      comments: 2,
      label: "high",
      files: 0,
      UserList: [
        { name: "user2", image: user2 },
        { name: "user3", image: user3 },
        { name: "user1", image: user1 },
        { name: "user3", image: user3 },
        { name: "user4", image: user4 },
        { name: "user1", image: user1 },
      ],
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "to do",
      color: "#5030E5",
      taskIds: [11, 12, 13],
      icon: true,
    },
    "column-2": {
      id: "column-2",
      title: "on-progress",
      color: "#FFA500",
      icon: false,
      taskIds: [21, 22],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      color: "#8BC48A",
      taskIds: [31, 32],
      icon: false,
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
