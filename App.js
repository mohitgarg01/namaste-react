import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {
        id: "parent"
    },
    [
    React.createElement(
        "div",
        {
            id: "child"},[
        React.createElement("h1", {}, "I am an Namaste React"),
        React.createElement("h2", {}, "I am an H2 gag"),
        ]),
    React.createElement(
        "div",
        {
            id: "child2"},[
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "I am an H2 tag"),
        ]
    ),
    ]); 


//JSX  





const heading = React.createElement(
    "h1",
     {id: "heading"},
      "Hello World from React!"
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);