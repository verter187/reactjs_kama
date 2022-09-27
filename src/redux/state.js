const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "0" },
      { id: 2, message: "It is my first post", likesCount: "25" },
      { id: 3, message: "Hello, my name is Andrew", likesCount: "17" },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        name: "Andrew",
        id: "1",
        messages: [
          { id: "1_1", message: "Hi, i am Andrew" },
          { id: "1_2", message: "Hi, how are you?" },
          { id: "1_3", message: "It is my first post" },
          { id: "1_4", message: "Hello, my name is Andrew" },
        ],
      },
      {
        name: "Dmitry",
        id: "2",
        messages: [
          { id: "2_1", message: "Hi, i am Dmitry" },
          { id: "2_2", message: "Hi, how are you?" },
          { id: "2_3", message: "It is my first post" },
          { id: "2_4", message: "Hello, my name is Andrew" },
        ],
      },
      {
        name: "Sasha",
        id: "3",
        messages: [
          { id: "3_1", message: "Hi, i am Sasha" },
          { id: "3_2", message: "Hi, how are you?" },
          { id: "3_3", message: "It is my first post" },
          { id: "3_4", message: "Hello, my name is Andrew" },
        ],
      },
      {
        name: "Sveta",
        id: "4",
        messages: [
          { id: "4_1", message: "Hi, i am Sveta" },
          { id: "4_2", message: "Hi, how are you?" },
          { id: "4_3", message: "It is my first post" },
          { id: "4_4", message: "Hello, my name is Andrew" },
        ],
      },
      {
        name: "Valera",
        id: "5",
        messages: [
          { id: "5_1", message: "Hi, i am Valera" },
          { id: "5_2", message: "Hi, how are you?" },
          { id: "5_3", message: "It is my first post" },
          { id: "5_4", message: "Hello, my name is Andrew" },
        ],
      },
      {
        name: "Victor",
        id: "6",
        messages: [
          { id: "6_1", message: "Hi, i am Victor" },
          { id: "6_2", message: "Hi, how are you?" },
          { id: "6_3", message: "It is my first post" },
          { id: "6_4", message: "Hello, my name is Andrew" },
        ],
      },
    ],
  },
};

export default state;
