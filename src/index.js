import ReactDOM from "react-dom/client";

import App from "./App";
let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: "0" },
  { id: 2, message: "It is my first post", likesCount: "25" },
  { id: 3, message: "Hello, my name is Andrew", likesCount: "17" },
];

const dialogs = [
  {
    name: "Andrew",
    id: "1",
    messages: [
      "Hi, i am Andrew",
      "Hi, how are you?",
      "It is my first post",
      "Hello, my name is Andrew",
    ],
  },
  {
    name: "Dmitry",
    id: "2",
    messages: [
      "Hi, i am Dmitry",
      "Hi, how are you?",
      "It is my first post",
      "Hello, my name is Andrew",
    ],
  },
  {
    name: "Sasha",
    id: "3",
    messages: [
      "Hi, i am Sasha",
      "Hi, how are you?",
      "It is my first post",
      "Hello, my name is Andrew",
    ],
  },
  {
    name: "Sveta",
    id: "4",
    messages: [
      "Hi, i am Sveta",
      "Hi, how are you?",
      "It is my first post",
      "Hello, my name is Andrew",
    ],
  },
  {
    name: "Valera",
    id: "5",
    messages: [
      "Hi, i am Valera",
      "Hi, how are you?",
      "It is my first post",
      "Hello, my name is Andrew",
    ],
  },
  {
    name: "Victor",
    id: "6",
    messages: [
      "Hi, i am Victor",
      "Hi, how are you?",
      "It is my first post",
      "Hello, my name is Andrew",
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App posts={posts} dialogs={dialogs} />);
