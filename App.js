// With single html element
/* // React.createElement -> gives an object
const heading = React.createElement(
  "h1",
  { id: "heading", className: "header" },
  "Hello World from React!"
); // 3 arguments (tag, object : to add attributes id, class etc to an element, what we need in tag)

console.log(heading); // returns as object

// As we want to put it in DOM/Browser so used ReactDOM
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render -> take object, create html element and put it in DOM inside root element.
root1.render(heading); */

// with parent child-sibling html structure
/*<div id="parent">
  <div id="child">
    <h1>I' am h1 tag.</h1>
    <h2>I' am h2 tag.</h2>
  </div>
</div>;*/
import React from "react";
import ReactDOM from "react-dom/client";

const parentChildHTML = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I' am h1 tag."),
    React.createElement("h2", {}, "I' am h2 tag."), // added in Array to create siblings
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I' am h1 tag."),
    React.createElement("h2", {}, "I' am h2 tag."), // added in Array to create siblings
  ]),
]);

console.log(parentChildHTML); // React create and returns Object

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parentChildHTML); // This will returns an reactObject converts to HTML & prints in page.
