const contentItems = [
    "React is a JavaScript library for building user interfaces.",
    "React is used to build single-page applications.",
    "React allows us to create reusable UI components.",
];

const codeSnippet = `
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
`;

const exerciseQuestion =
    "What is a correct command to create a React application ?";

const exerciseOptions = [
    "npx create-react-app my-team",
    "npx start-react-app my-team",
    "npx init-react-app my-team",
];

const createReactAppPoints = [
    "To learn and test React, you should set up a React Environment on your computer.",
    "This tutorial uses the create-react-app.",
    "The create-react-app tool is an officially supported way to create React applications.",
    "Node.js is required to use create-react-app.",
    "Open your terminal in the directory you would like to create your application.",
    "Run this command to create a React application named my-react-app:",
];

export {
    contentItems,
    codeSnippet,
    exerciseOptions,
    exerciseQuestion,
    createReactAppPoints,
};
