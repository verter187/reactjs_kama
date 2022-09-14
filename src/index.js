import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: "0" },
  { id: 2, message: "It is my first post", likesCount: "25" },
  { id: 3, message: "Hello, my name is Andrew", likesCount: "17" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App posts={posts} />);
